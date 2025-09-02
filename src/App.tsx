import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/Todo/List";
import Login from "./components/Login";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase"; // your firebase.ts
import Signup from "./components/Signup";
import Product from "./components/Ecommerce/ProductList";
import CandyCrush from "./components/Games/CandyCrush";
import Racing from "./components/Games/Racing";
import TicTacToe from "./components/Games/TicTacToe";

function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <Router>
      {user ? (
        // Logged-in layout
        <div className="flex flex-col min-h-screen">
          {/* Navbar always at top */}
          <Navbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar (slides in on mobile, static on md+) */}
            <Sidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />

            {/* Main content area */}
            <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto bg-gray-50">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/todo" element={<TodoList />} />
                <Route path="/ecommerce" element={<Product />} />
                <Route path="/login" element={<Navigate to="/" />} />
                <Route
                  path="/candycrush"
                  element={<CandyCrush ROWS={5} COLS={5} />}
                />
                <Route path="/racing" element={<Racing />} />
                <Route path="/tic-tac-toe" element={<TicTacToe />} />
              </Routes>
            </main>
          </div>
        </div>
      ) : (
        // Not logged in → only show login/signup
        <div className="flex flex-col min-h-screen">
          <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gray-50">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </main>
        </div>
      )}
    </Router>
  );
}

export default App;
