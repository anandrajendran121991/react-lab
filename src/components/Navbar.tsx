import { useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Menu } from "lucide-react"; // hamburger icon

export default function Navbar({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
      {/* Left side */}
      <div className="flex items-center gap-3">
        {/* Hamburger for mobile */}
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-2 rounded hover:bg-gray-700"
        >
          <Menu className="h-6 w-6" />
        </button>

        <div className="text-xl font-bold">React Lab</div>
      </div>

      {/* Right side */}
      <div className="space-x-4 hidden md:flex">
        {user ? (
          <button
            onClick={() => signOut(auth)}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <>
            <a href="/login" className="hover:underline">
              Login
            </a>
            <a
              href="/signup"
              className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
            >
              Sign Up
            </a>
          </>
        )}
      </div>
    </nav>
  );
}
