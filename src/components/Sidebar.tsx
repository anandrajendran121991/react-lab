import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-6 flex flex-col gap-4">
      <nav className="flex flex-col gap-3">
        <Link
          to="/"
          className="px-3 py-2 rounded hover:bg-gray-700 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/counter"
          className="px-3 py-2 rounded hover:bg-gray-700 transition-colors"
        >
          Counter
        </Link>
        <Link
          to="/todo"
          className="px-3 py-2 rounded hover:bg-gray-700 transition-colors"
        >
          Todo
        </Link>
        <Link
          to="/cart"
          className="px-3 py-2 rounded hover:bg-gray-700 transition-colors"
        >
          Cart
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
