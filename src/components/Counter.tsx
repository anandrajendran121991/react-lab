import { useState } from "react";

function CounterButton() {
  const [count, setCount] = useState(3);

  return (
    <>
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center gap-6">
        <h4 className="text-xl font-semibold">Count: {count}</h4>

        <div className="flex gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 rounded-lg font-medium bg-green-600 hover:bg-green-700 text-white transition"
          >
            Increase
          </button>
          <button
            onClick={() => setCount(count - 1)}
            disabled={count <= 0}
            className={`px-4 py-2 rounded-lg font-medium transition 
              ${
                count <= 0
                  ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
          >
            Decrease
          </button>

          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white transition"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default CounterButton;
