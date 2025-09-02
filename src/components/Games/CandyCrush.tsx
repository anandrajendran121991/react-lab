import { useState, useRef, useEffect } from "react";

type CandyCrushProps = {
  ROWS: number;
  COLS: number;
};

function CandyCrush({ ROWS, COLS }: CandyCrushProps) {
  const [matrix, setMatrix] = useState<number[][]>([]);
  const cache = useRef<Map<number, number>>(new Map());

  useEffect(() => {
    const newMatrix: number[][] = Array.from({ length: ROWS }, () =>
      Array(COLS).fill(0)
    );

    setMatrix(newMatrix);

    // initialize cache (each col starts from bottom row)
    const newCache = new Map<number, number>();
    for (let col = 0; col < COLS; col++) {
      newCache.set(col, ROWS - 1);
    }
    cache.current = newCache;
  }, [ROWS, COLS]); // re-run only if size changes

  const resetGame = () => {
    const resetMatrix: number[][] = Array.from({ length: ROWS }, () =>
      Array(COLS).fill(0)
    );
    setMatrix(resetMatrix);
    const resetCache = new Map<number, number>();
    for (let col = 0; col < COLS; col++) {
      resetCache.set(col, ROWS - 1);
    }
    cache.current = resetCache;
  };

  const handleClick = (col: number) => {
    const lastMarked = cache.current.get(col);

    if (lastMarked === undefined) return;
    if (lastMarked < 0) return; // reached top

    const newMatrix = matrix.map((row) => [...row]);
    newMatrix[lastMarked][col] = 1;

    setMatrix(newMatrix);
    cache.current.set(col, lastMarked - 1);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-br from-indigo-200 via-pink-100 to-yellow-100 min-h-screen">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">
        🍬 Candy Crush
      </h2>

      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 60px)`,
        }}
      >
        {matrix.map((row, rowIdx) =>
          row.map((col, colIdx) => (
            <button
              key={`${rowIdx}-${colIdx}`}
              onClick={() => handleClick(colIdx)}
              className={`
                w-14 h-14 rounded-lg shadow-md border-2 border-indigo-300 
                flex items-center justify-center text-lg font-bold
                transition-all duration-300 ease-in-out
                ${
                  col === 1
                    ? "bg-gradient-to-br from-pink-400 to-red-500 text-white animate-bounce"
                    : "bg-white hover:bg-indigo-100"
                }
              `}
            >
              {col === 1 ? "🍭" : ""}
            </button>
          ))
        )}
      </div>
      <button
        className="mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md 
             hover:bg-red-600 hover:scale-105 transition-transform duration-200"
        onClick={resetGame}
      >
        Restart
      </button>
    </div>
  );
}

export default CandyCrush;
