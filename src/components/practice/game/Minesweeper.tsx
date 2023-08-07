import Section from "@/components/section";
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

function MinesweeperGame() {
    return (
        <></>
    );
}