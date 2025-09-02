import { useState } from "react";

type Player = "X" | "O" | null;

export default function TicTacToe() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<Player | "Draw" | null>(null);

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (newBoard: Player[]) => {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }
    if (newBoard.every(Boolean)) return "Draw";
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
    } else {
      setIsXNext(!isXNext);
    }
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 to-purple-300">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 animate-bounce">
        Tic Tac Toe 🎮
      </h1>

      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, index) => {
          const isWinningCell =
            winner !== null &&
            winningCombos.some(
              (combo) =>
                combo.includes(index) &&
                board[combo[0]] &&
                board[combo[0]] === board[combo[1]] &&
                board[combo[0]] === board[combo[2]]
            );

          return (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`w-24 h-24 flex items-center justify-center text-2xl font-bold rounded-lg shadow-lg
                transition-transform duration-300 ease-in-out
                hover:scale-105 hover:bg-yellow-200
                ${cell === "X" ? "text-blue-600" : "text-red-600"}
                ${isWinningCell ? "bg-green-300 animate-pulse" : "bg-white"}
              `}
            >
              {cell}
            </button>
          );
        })}
      </div>

      {winner && (
        <div className="mt-6 text-2xl font-semibold text-gray-800 animate-fade-in">
          {winner === "Draw" ? "It's a Draw! 🤝" : `Winner: ${winner} 🎉`}
        </div>
      )}

      <button
        onClick={handleRestart}
        className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow-md
          hover:from-purple-500 hover:to-blue-500 transition-all duration-500 ease-in-out
          animate-fade-in"
      >
        Restart 🔄
      </button>
    </div>
  );
}
