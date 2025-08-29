import { useState } from "react";

function CounterButton() {
  const [count, setCount] = useState(3);
  const codeString = `
import { useState } from "react";
function CounterButton() {
  const [count, setCount] = useState(3);
  return (
    <main className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center gap-6">
        <h4 className="text-xl font-semibold">Count: {count}</h4>
        <div className="flex gap-4">
          <button
            onClick={() => setCount(count - 1)}
            disabled={count <= 0}
            className={\`px-4 py-2 rounded-lg font-medium transition \${count <= 0 
              ? "bg-gray-400 text-gray-200 cursor-not-allowed" 
              : "bg-blue-600 hover:bg-blue-700 text-white"}\`}
          >
            Decrease
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 rounded-lg font-medium bg-green-600 hover:bg-green-700 text-white transition"
          >
            Increase
          </button>
        </div>
      </div>
    </main>
  );
}
export default CounterButton;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
  };

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

      {/* Code Section */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg font-semibold">Component Code</h4>
          <button
            onClick={handleCopy}
            className="px-3 py-1 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Copy Code
          </button>
        </div>
        <pre className="bg-gray-900 text-green-300 text-sm rounded-xl p-4 overflow-x-auto shadow-inner">
          <code>{codeString}</code>
        </pre>
      </div>
    </>
  );
}

export default CounterButton;
