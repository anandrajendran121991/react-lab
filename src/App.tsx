import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/Todo/List";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Navbar at the top */}
          <Navbar />

          <div className="flex flex-1">
            {/* Sidebar on the left */}
            <Sidebar />

            {/* Main content */}
            <main className="container mx-auto flex-1 p-6">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/counter" element={<Counter />}></Route>
                <Route path="/todo" element={<TodoList />}></Route>
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
