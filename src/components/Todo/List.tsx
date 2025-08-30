import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn Tailwind", completed: true },
    { id: 2, text: "Build a Todo App", completed: false },
    { id: 3, text: "Add Toggle Filter", completed: false },
  ]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showCompleted, setShowCompleted] = useState(true);

  const addTodo = () => {
    if (input.trim() === "") {
      setError("Enter the task!");
      return;
    }

    const todo = { id: Date.now(), text: input.trim(), completed: false };
    setTodos([...todos, todo]);
    setInput("");
    setError("");
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // ✅ Fixed filtering logic
  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    if (showCompleted) return matchesSearch;
    return matchesSearch && !todo.completed;
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      {/* Todo Card */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          ✅ Todo App
        </h2>

        {/* Input + Button */}
        <div className="flex mb-4">
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
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        {/* Controls */}
        <div className="flex items-center gap-3 mb-6">
          {/* Toggle */}
          <button
            onClick={() => setShowCompleted(!showCompleted)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              showCompleted ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                showCompleted ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className="text-sm text-gray-600 w-32">
            {showCompleted ? "Showing all" : "Hiding completed"}
          </span>

          {/* Search */}
          <input
            type="text"
            value={searchTerm}
            placeholder="🔍 Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-200 outline-none"
          />
        </div>

        {/* Todo List */}
        <ul className="space-y-3">
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between bg-gray-50 border rounded-lg px-4 py-2 shadow-sm"
              >
                {/* ✅ Checkbox */}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="h-4 w-4 accent-blue-600"
                />
                <span
                  className={`flex-1 ml-3 ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-700"
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="text-red-500 hover:text-red-700 transition cursor-pointer ml-2"
                >
                  ✕
                </button>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">No results found</p>
          )}
        </ul>
      </div>
    </div>
  );
}
