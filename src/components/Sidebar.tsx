import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [openGames, setOpenGames] = useState(false);

  return (
    <>
      {/* Sidebar only */}
      <aside
        className={`fixed top-0 left-0 min-h-screen w-64 bg-gray-900 text-white p-6 flex flex-col gap-4 transform
          transition-transform duration-300 z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:sticky md:top-0`}
      >
        {/* Close button visible only on small screens */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white md:hidden"
          onClick={onClose}
        >
          ✕
        </button>

        <nav className="flex flex-col gap-3 mt-8 md:mt-0">
          <Link
            to="/"
            onClick={onClose}
            className="px-3 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/counter"
            onClick={onClose}
            className="px-3 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            Counter
          </Link>
          <Link
            to="/todo"
            onClick={onClose}
            className="px-3 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            Todo
          </Link>
          <Link
            to="/ecommerce"
            onClick={onClose}
            className="px-3 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            Ecommerce
          </Link>

          {/* Games Section */}
          <div>
            <button
              onClick={() => setOpenGames(!openGames)}
              className="w-full flex justify-between items-center px-3 py-2 rounded hover:bg-gray-700 transition-colors"
            >
              <span>Games</span>
              <span className="text-gray-400">{openGames ? "▲" : "▼"}</span>
            </button>

            {openGames && (
              <ul className="ml-4 flex flex-col gap-2 mt-2">
                <li>
                  <Link
                    to="/candycrush"
                    onClick={onClose}
                    className="block px-3 py-2 rounded hover:bg-gray-700 transition-colors"
                  >
                    Candy Crush
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tic-tac-toe"
                    onClick={onClose}
                    className="block px-3 py-2 rounded hover:bg-gray-700 transition-colors"
                  >
                    Tic Tac Toe
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
