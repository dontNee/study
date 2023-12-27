import TicTacToe from "@/components/practice/game/Tic-Tac-Toe";
import Reversi from "@/components/practice/game/Reversi";
import Minesweeper from "@/components/practice/game/Minesweeper";

export default function Practice() {
    
    return (
        <div className="container" style={{marginBottom: "100px"}}>
        <TicTacToe />
        <Reversi />
        <Minesweeper />
        </div>
    );
}