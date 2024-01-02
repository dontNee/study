import Section from "@/components/section";
import { useEffect, useMemo, useState } from 'react';
import ReversiRules from "../gameRules/ReversiRules";
import * as _ from "lodash";
import styles from "@/styles/reversi.module.scss";
import { Button, Divider } from "@mui/material";

// 黑白棋
export default function Reversi() {
    // 游戏标题
    const title = "· 黑白棋游戏";
    // 游戏描述
    const descption = "介绍：19世纪末英国人发明的小游戏。";
    // 游戏规则
    const rules = `游戏规则：
        1.两个玩家，一个执白棋，一个执黑棋，轮流在8乘8的棋盘上落子，当一方无子可下时游戏结束，棋子数量多者获胜。`

    return (
        <Section title={title}>
            <p>{descption}</p>
            <p>{rules}</p>
            <div style={{width: "100%", overflowX: "auto"}}>
                <ReversiGame />
            </div>
        </Section>
    )
}

// 游戏组件
function ReversiGame() {
    // 提示功能
    const [openTip, setOpenTip] = useState(false);
    // 黑棋数量
    const [blackCount, setBlackCount] = useState(0);
    // 白棋数量
    const [whiteCount, setWhiteCount] = useState(0);

    return (
        <>
            <div style={{display: 'flex'}}>
                <Board openTip={openTip} listenChessCount={(black: number, white: number) => {setBlackCount(black);setWhiteCount(white)}}  />
                <BoardSide blackCount={blackCount} whiteCount={whiteCount} />
            </div>
            <div>
                <BoardBottom shouldOpen={openTip} handleOpenTip={(changeTip:boolean) => {setOpenTip(changeTip)}} />
            </div>
        </>
    );
}

// 棋盘组件
function Board({openTip = false, listenChessCount}: any) {
    // 记录下一个当前下棋者
    const [nextChess, setNextChess] = useState(ChessState.black);
    // 记录当前棋盘上的棋子
    const [boardChess, setBoardChess] = useState({} as any);
    // 提示位置
    const [tipPoints, setTipPoints] = useState([] as Array<any>);
    // 初始化棋盘上的棋子
    const board = useMemo(() => {
        // 初始化结果
        const resultList = [];
        // 循环行数据
        for (let row = 1; row <= 8; row++) {
            // 初始化一行
            let rowResult = [];
            // 循环列数据
            for (let col = 1; col <=8; col++) {
                // 放入数据
                rowResult.push([col, row]);
            }
            resultList.push(rowResult);
        }
        // 返回棋盘
        return resultList;
    }, []);

    // 组件初始化(只执行一次)
    useEffect(() => {
        // 初始化棋盘
        let initBoardChess = ReversiRules.initBoardChess();
        // 设置
        setBoardChess(initBoardChess);
        // 向上曾组件返回棋子数量
        typeof listenChessCount == "function" && listenChessCount(initBoardChess[ChessState.black].length, initBoardChess[ChessState.white].length);
    }, []);

    // 棋子状态变化时，扫描可落点
    useEffect(() => {
        if (openTip) {
            // 获取下一步能够落点的结果
            const nextPoints = ReversiRules.computedNextPoints(nextChess, boardChess, board);
            // 放入到提示位置
            setTipPoints(nextPoints);
        }
        if (!openTip) {
            // 清空提示
            setTipPoints([]);
        }
    }, [nextChess, openTip]);

    // 变换棋盘布局
    function changeBoardChess(coordinate: [x: number, y: number]) {
        // 获取转换的坐标点
        const changedPoints = ReversiRules.checkPoint(coordinate, nextChess, boardChess);
        // 当没有转换坐标点时，直接返回
        if (!changedPoints || !changedPoints.length) {
            return;
        }
        // 获取当前的当前棋子列表
        const currentMyChessList = boardChess[nextChess];
        // 获取当前的对方棋子列表
        const currentTaChessList = boardChess[ReversiRules.taChess(nextChess)];
        // 获取下一步我的棋子列表(我的棋子 = 当前我的棋子 + 变化的棋子)
        const nextMyChessList = _.concat(currentMyChessList, changedPoints, [coordinate]);
        // 获取下一步对方棋子列表(对方的棋子 = 当前对方的棋子 - 变化的棋子)
        const nextTaChessList = _.differenceWith(currentTaChessList, changedPoints, (arrVal:any, othVal:any) => {
            return ReversiRules.compareCoordinate(arrVal, othVal)
        });
        // 获取棋盘(重新组装棋盘，对应黑白棋数量)
        const initChess = ReversiRules.initBoardChess(nextChess == ChessState.black 
            ? [nextMyChessList, nextTaChessList]
            : [nextTaChessList, nextMyChessList]
        );
        // 设置
        setBoardChess(initChess);
        // 向上曾组件返回棋子数量
        typeof listenChessCount == "function" && listenChessCount(initChess[ChessState.black].length, initChess[ChessState.white].length);
        // 返会长度
        return changedPoints.length;
    }

    // 处理点击事件
    function handleSquareClick(coordinate: [x: number, y: number]) {
        // 变换棋盘
        // 变换棋子的类型：黑棋或者白棋
        changeBoardChess(coordinate) && setNextChess(ReversiRules.taChess(nextChess));
    }

    return (
        <table>
            <tbody>
                {
                    board.map((row, index) => {
                        return (
                            <TableRow 
                                nextChess={nextChess} 
                                row={row} 
                                key={index} 
                                handleSquareClick={handleSquareClick} 
                                boardChess={boardChess}
                                tipPoints={tipPoints}
                            ></TableRow>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

// 定义棋子组件
function Square({coordinate, nextChess, handleSquareClick, boardChess, tipPoints}: any) {
    // 比较坐标点
    function compareCoordinate(coordinate1: [x: number, y: number]) {
        // 调用比较函数
        return ReversiRules.compareCoordinate(coordinate1, coordinate);
    }
    // 获取坐标点的颜色样式
    function pointColor() {
        // 用于记录当前按钮的颜色
        let color;
        // 扫描黑棋是否有当前坐标
        if (!color && _.find(boardChess[ChessState.black], compareCoordinate)) {
            color = styles.black;
        }
        // 扫描白棋是否有当前坐标
        if (!color && _.find(boardChess[ChessState.white], compareCoordinate)) {
            color = styles.white;
        }
        // 扫描提示坐标点
        if (!color && _.find(tipPoints, compareCoordinate)) {
            color = styles[`${nextChess}tips`];
        }
        return color;
    }
    // 处理按钮的点击事件
    function handleBtnClick() {
        // 打印当前坐标
        console.debug("当前点击坐标：", coordinate);
        // 处理按钮的点击事件
        handleSquareClick(coordinate);
    };

    return (
        <button className={styles.square}>
            <i 
                className={`${styles.chess} ${pointColor()}`} 
                onClick={handleBtnClick}
            ></i>
        </button>
    );
}

// 定义列组件
function TableCol({ col, handleSquareClick, nextChess, boardChess, tipPoints }: any) {
    return (
        <td>
            <Square 
                coordinate={col} 
                handleSquareClick={handleSquareClick} 
                nextChess={nextChess}
                boardChess={boardChess}
                tipPoints={tipPoints}
            />
        </td>
    );
}

// 定义行组件
function TableRow({ row, handleSquareClick, nextChess, boardChess, tipPoints }: any) {
    // 获取所有的列
    const tds = row.map((item: any) => {
        return (
            <TableCol 
                col={item} 
                key={item.join("")} 
                handleSquareClick={handleSquareClick} 
                nextChess={nextChess}
                boardChess={boardChess}
                tipPoints={tipPoints}
            ></TableCol>
        );
    });

    return (
        <tr>
            {tds}
        </tr>
    );
}

// 侧边区域
function BoardSide({blackCount = 0, whiteCount = 0}) {
    return (
        <div style={{padding: '35px', position: 'relative'}}>
            <div style={{top: '50%', position: 'relative',transform: 'translateY(-50%)'}}>
                <div>
                    <span>黑棋数量： {blackCount}</span>
                </div>
                <Divider style={{border: '2px solid'}} />
                <div>
                    <span>白棋数量： {whiteCount}</span>
                </div>
            </div>
        </div>
    )
}
// 底部区域
function BoardBottom({shouldOpen, handleOpenTip}: any) {
    return (
        <div>
            <p></p>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '544px'}}>
                <Button onClick={() => {handleOpenTip(!shouldOpen)}}>{shouldOpen ?  "关闭" : "开启"}提示</Button>
            </div>
        </div>
    )
}

// 棋子的状态
export enum ChessState {
    empty = "empty", //为空
    black = "black", //黑棋
    white = "white", // 白棋
}
