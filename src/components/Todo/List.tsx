import { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const addTodo = () => {
    if (input.trim() === "") {
      setError("Enter the task!");
      return;
    }
    setTodos([...todos, input]);
    setInput("");
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const codeString = `
import { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">Todo App</h2>

      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task..."
          className="flex-1 border border-gray-300 rounded-l-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 p-2 rounded-lg shadow-sm"
          >
            <span>{todo}</span>
            <button
              onClick={() => removeTodo(index)}
              className="text-red-500 hover:text-red-700 transition"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      {/* Todo Card */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          ✅ Todo App
        </h2>

        {/* Input + Button */}
        <div className="flex mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task..."
            className="flex-1 border border-gray-300 rounded-l-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <button
            onClick={addTodo}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-3 rounded-r-lg transition"
          >
            Add
          </button>
        </div>
        <p className="text-red-500">{error}</p>

        {/* Todo List */}
        <ul className="space-y-3">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-50 border rounded-lg px-4 py-2 shadow-sm"
            >
              <span className="text-gray-700">{todo}</span>
              <button
                onClick={() => removeTodo(index)}
                className="text-red-500 hover:text-red-700 transition cursor-pointer"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Code Section */}
      <div className="mt-10 w-full max-w-5xl bg-gray-900 text-green-300 text-sm rounded-xl p-4 overflow-x-auto shadow-inner">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg font-semibold text-white">Component Code</h4>
          <button
            onClick={handleCopy}
            className="px-3 py-1 text-sm bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
          >
            Copy Code
          </button>
        </div>
        <pre className="whitespace-pre-wrap">
          <code>{codeString}</code>
        </pre>
      </div>
    </div>
  );
}
