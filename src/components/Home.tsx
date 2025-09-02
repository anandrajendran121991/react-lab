import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../services/firebase"; // import firebase auth instance

function Home() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      {!user ? (
        <>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Welcome to React Lab 🚀
          </h1>
          <p className="mb-8 text-gray-600 text-base md:text-lg max-w-xl">
            Please login or sign up to continue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => navigate("/login")}
              className="flex-1 sm:flex-none px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="flex-1 sm:flex-none px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
            >
              Sign Up
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 break-words max-w-full px-2">
            Hello, {user.email} 🎉
          </h2>
          <p className="mb-6 text-gray-600 text-base md:text-lg max-w-xl">
            You are now logged in. Explore the features below:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => navigate("/counter")}
              className="flex-1 sm:flex-none px-6 py-3 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 transition"
            >
              Counter
            </button>
            <button
              onClick={() => navigate("/todo")}
              className="flex-1 sm:flex-none px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition"
            >
              Todo List
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
