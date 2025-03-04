import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AIChat from "./pages/AIChat";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { GoogleOAuthProvider } from "@react-oauth/google";


// Remove dotenv import as it's not needed with Vite
// Environment variables in Vite are accessed via import.meta.env

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    return storedAuth === "true";
  });

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode === "true";
  });

  const apiKey = import.meta.env.VITE_GOOGLE_CLIENT_ID


  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);



  return (
    <GoogleOAuthProvider clientId={apiKey}>
      <Router>
        <div className={`flex h-screen bg-gray-50 ${darkMode ? 'dark:bg-gray-900' : ''}`}>
          {isAuthenticated && (
            <Sidebar setIsAuthenticated={setIsAuthenticated} />
          )}
          <div
            className={`flex-1 flex flex-col overflow-hidden ${isAuthenticated ? "ml-64" : ""}`}
          >
            <div className="flex-1 overflow-y-auto">
              <Routes>
                <Route
                  path="/login"
                  element={
                    <Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
                  }
                />
                <Route
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated} />
                  }
                >
                  <Route path="/" element={<Home />} />
                  <Route path="/chat" element={<AIChat />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route
                    path="/profile"
                    element={<Profile setDarkMode={setDarkMode} darkMode={darkMode} />}
                  />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
