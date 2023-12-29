import Section from "@/components/section";
import styles from "@/styles/minesweeper.module.scss";
import { useMemo, useState } from "react";
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
    // 坐标系
    const axis = useMemo(() => {
        // 雷位置数组
        const minesList = [];
        // 9*9
        for (let x = 1;x <= rows; x++) {
            // 是否已有足够的雷
            if (minesList.length == mines) {
                break;
            }
            for(let y = 1; y <= cols; y++) {
                // 获取一个随机数(0 <= random < 1)
                let random = Math.random();
                // 获取当前数组长度
                let minesListLength = minesList.length;
                // 特殊条件下，优先被执行
                if (x == 2 && minesListLength == 0) {
                    // 获取个位数
                    let tmp = Math.ceil(random * 10);
                    // 0 取 1 ， 10 取 9
                    tmp = tmp == 0 ? 1 : tmp == 10 ? 9 : tmp;
                    // 取tmp
                    minesList.push([x, tmp]);break;
                }  
                if (x == 4 && minesListLength == 1) {
                    // 获取个位数
                    let tmp = Math.ceil(random * 10);
                    // 0 取 1 ， 10 取 9
                    tmp = tmp == 0 ? 1 : tmp == 10 ? 9 : tmp;
                    // 取tmp
                    minesList.push([x, tmp]);break;
                }
                if (x == rows && minesListLength == 0) {
                    // 随机取3个数
                    minesList.push([x, y]);break;
                }
                // 获取随机数
                if (random > 0.875) {
                    // 当前位置设置雷
                    minesList.push([x, y]);
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
                currentRow.push(<td key={y} style={{lineHeight: "0"}}><Square x={x} y={y}></Square></td>);
            }
            result.push(<tr key={x}>{currentRow}</tr>);
        }
        return (
            <table border={0}>
                <tbody>
                    { result }
                </tbody>
            </table>
        );
    }, []);
    
    return axis;
}

// 棋子组件
function Square({x, y}: any) {
    // 初始化为盲盒状态, 即closed
    const [openState, setOpenState] = useState(false);

    // 处理按钮的点击
    function handleBtnClick() {
        // 开启按钮
        setOpenState(true);
    }

    return (
        <button 
            className={`${styles.square} ${openState ? styles.opened : styles.closed}`} 
            onClick={handleBtnClick}
        ></button>
    );
}