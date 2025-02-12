import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AIChat from "./pages/AIChat";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <GoogleOAuthProvider clientId="780082880704-8blmqonbuk27ohltpqa80ut7j86lbfoj.apps.googleusercontent.com">
      <Router>
        <div className="flex h-screen bg-gray-50">
          {isAuthenticated && <Sidebar setIsAuthenticated={setIsAuthenticated} />}
          <div
            className={`flex-1 flex flex-col overflow-hidden ${isAuthenticated ? "ml-64" : ""
              }`}
          >
            <div className="flex-1 overflow-y-auto">
              <Routes>
                <Route
                  path="/login"
                  element={<Login setIsAuthenticated={setIsAuthenticated} />}
                />
                <Route
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated} />
                  }
                >
                  <Route path="/" element={<Home />} />
                  <Route path="/chat" element={<AIChat />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/profile" element={<Profile />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />{" "}
                {/* Redirect invalid URLs */}
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
