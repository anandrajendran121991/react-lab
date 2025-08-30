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
    <div className="flex flex-col items-center justify-center h-full text-center">
      {!user ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Welcome to React Lab 🚀</h1>
          <p className="mb-8 text-gray-600">
            Please login or sign up to continue.
          </p>
          <div className="space-x-4">
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
            >
              Sign Up
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6">Hello, {user.email} 🎉</h1>
          <p className="mb-6 text-gray-600">
            You are now logged in. Explore the features below:
          </p>
          <div className="flex space-x-6">
            <button
              onClick={() => navigate("/counter")}
              className="px-6 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600"
            >
              Counter
            </button>
            <button
              onClick={() => navigate("/todo")}
              className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600"
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
