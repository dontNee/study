import Section from "@/components/section";
import styles from "@/styles/minesweeper.module.scss";
import { useEffect, useId, useMemo, useState } from "react";
import Confirm from "@/components/confirm";
import * as _ from "lodash";
// 扫雷
export default function Minesweeper() {
    // 游戏标题
    const title = "· 扫雷游戏";
    // 游戏描述
    const descption = "介绍：1992年微软发布的Windows3.1中加入扫雷游戏。";
    // 游戏规则
    const rules = `游戏规则：
        鼠标右键点击原始方块，以小旗标记为雷。再次右键取消标记。鼠标左键点击方块直接打开，如碰到地雷则游戏结束。`;

    return (
        <Section title={title}>
            <p>{descption}</p>
            <p>{rules}</p>
            <div style={{width: "100%", overflowX: "auto"}}>
                <MinesweeperGame />
            </div>
        </Section>
    );
}

// 扫雷游戏
function MinesweeperGame({rows = 9, cols = 9, mines = 10}) {
    // 游戏结束对话框控制
    const [confirmOpen, setConfirmOpened] = useState(false);
    // 重新开始控制
    const [restart, setRestart] = useState(false);
    // 坐标系
    const [axis, setAxis] = useState([] as any);
    // 坐标系
    useEffect(() => {
        // 雷位置数组
        const minesList = [];
        // 9*9
        for (let x = 1;x <= rows; x++) {
            for(let y = 1; y <= cols; y++) {
                // 获取一个随机数(0 <= random < 1)
                let random = Math.random();
                // 获取当前数组长度
                let minesListLength = minesList.length;
                // 长度不够10个时，优先添加满
                if (minesListLength < mines) {
                    minesList.push([x, y]);
                }
                // 长度满足10个并且随机数 > 0.8
                if (random > 0.75 && minesListLength == mines) {
                    // 获取数组的索引
                    let index = _.random(0, mines - 1);
                    // 当前位置设置雷
                    minesList.splice(index, 1, [x, y]);
                }
            }
        }
        // 初始化坐标系为一个空数组
        const result = [];
        // 9*9
        for (let x = 1;x <= rows; x++) {
            // 定义行
            const currentRow = [];
            // 生成列
            for(let y = 1; y <= cols; y++) {
                // 遍历地雷数组，获取地雷坐标
                let shouldMine: boolean = _.findIndex(minesList, (item) => item[0] == x && item[1] == y) > -1;
                // 生成组件
                currentRow.push(
                    <td key={y} style={{lineHeight: "0"}}>
                        <Square x={x} y={y} minesflag={shouldMine} squareClick={handleSqureClick} restartFlag={restart}></Square>
                    </td>
                );
            }
            result.push(<tr key={x}>{currentRow}</tr>);
        }
        setAxis(result);
    }, [restart]);

    // 处理点击按钮数量
    function handleSqureClick(isMines: boolean) {
        // 游戏结束
        if (isMines) {
            // 开启对话框
            setConfirmOpened(true);
        }
    }

    // 游戏重新开始
    function handleGameRestart() {
        // 设置状态
        setRestart(!restart);
    }
    
    return (
        <>
            <table border={0}>
                <tbody>
                    { axis }
                </tbody>
            </table>
            <Confirm open={confirmOpen} setOpen={setConfirmOpened} restartGame={handleGameRestart} message={"游戏结束，再来一次？" }></Confirm>
        </>
    );
}

// 棋子组件
function Square({x, y, minesflag, squareClick, restartFlag}: any) {
    // 初始化为盲盒状态, 即closed
    const [openState, setOpenState] = useState(false);
    // 动态设置className
    const [btnClassName, setBtnClassName] = useState("");

    // 初始化钩子函数
    useEffect(() => {
        // 类名字符串
        const strClassName = minesflag 
            ? `${styles.square} ${openState ? styles.opened : styles.closed} ${styles.mines}` 
            : `${styles.square} ${openState ? styles.opened : styles.closed}`
        setBtnClassName(strClassName);
    }, [openState, minesflag]);
    // 重新开始
    useEffect(() => {
        // 重新设置打开状态
        setOpenState(false);
    }, [restartFlag])

    // 处理按钮的点击
    function handleBtnClick() {
        // 开启按钮
        setOpenState(true);
        // 上级处理点击事件
        squareClick(minesflag);
    }

    return (
        <button 
            className={btnClassName}
            onClick={handleBtnClick}
        ></button>
    );
}