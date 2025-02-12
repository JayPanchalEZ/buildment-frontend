import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaComments,
  FaPhone,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

function Sidebar({ setIsAuthenticated }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <>
      {/* Sidebar Toggle Button (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 text-primary-600 md:hidden"
      >
        {isOpen ? (
          <FaTimes className="h-6 w-6" />
        ) : (
          <FaBars className="h-6 w-6" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-44 bg-white dark:bg-gray-800 shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 z-40 flex flex-col justify-between`}
      >
        {/* Header */}
        <div className="flex items-center justify-center py-4 border-b dark:border-gray-700">
          <Link to="/" className="text-xl font-bold text-primary-600 dark:text-white hover:opacity-80 transition">
            BuildMend
          </Link>
        </div>

        {/* Main Navigation - Center Aligned */}
        <nav className="flex flex-col space-y-4 flex-grow justify-center items-center">
          <NavItem
            to="/"
            icon={FaHome}
            label="Home"
            setIsOpen={setIsOpen}
          />
          <NavItem
            to="/chat"
            icon={FaComments}
            label="Chat"
            setIsOpen={setIsOpen}
          />
          <NavItem
            to="/contact"
            icon={FaPhone}
            label="Contact"
            setIsOpen={setIsOpen}
          />
        </nav>

        {/* Profile & Logout Section */}
        <div className="flex flex-col items-center w-full mb-4">
          <NavItem
            to="/profile"
            icon={FaUser}
            label="Profile"
            setIsOpen={setIsOpen}
          />

          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-red-600 hover:text-red-800 transition px-6 py-3 w-full text-base border-t mt-2 justify-center dark:border-gray-700"
          >
            <FaSignOutAlt className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}

function NavItem({ to, icon: Icon, label, setIsOpen }) {
  return (
    <Link
      to={to}
      onClick={() => setIsOpen(false)}
      className="flex flex-col items-center text-gray-700 hover:text-primary-600 transition px-4 py-2 text-base dark:text-gray-300"
    >
      <Icon className="h-6 w-6" />
      <span className="mt-1">{label}</span>
    </Link>
  );
}

export default Sidebar;
