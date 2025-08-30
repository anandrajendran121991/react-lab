import { useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Track login state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">React Lab</div>

      <div className="space-x-4">
        {user ? (
          <>
            <button
              onClick={() => signOut(auth)}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
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
