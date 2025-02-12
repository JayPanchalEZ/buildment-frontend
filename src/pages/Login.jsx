import { useState } from "react";
import PropTypes from "prop-types"; // Added prop type checking
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function Login({ setIsAuthenticated, setUser }) {
  const navigate = useNavigate();
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  // Handle Google login manually
  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      console.log("Google Login Response:", response);

      if (!response?.access_token) {
        alert("Failed to retrieve user details");
        return;
      }

      try {
        // Fetch user info from Google API
        const { data } = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${response.access_token}` },
        });

        console.log("User Info:", data);

        if (typeof setUser === "function") {
          setUser({
            name: data.name,
            email: data.email,
            picture: data.picture,
          });
        } else {
          console.error("setUser is not a function");
        }

        if (typeof setIsAuthenticated === "function") {
          setIsAuthenticated(true);
        } else {
          console.error("setIsAuthenticated is not a function");
        }

        localStorage.setItem("user", JSON.stringify(data));

        navigate("/dashboard"); // Redirect to dashboard after login

      } catch (error) {
        console.error("Error fetching user info:", error);
        alert("Failed to retrieve user details");
      }
    },
    onError: () => alert("Google Login Failed!"),
  });

  const handleGoogleLogin = () => {
    if (!acceptedPrivacy) {
      alert("Please accept the Privacy Policy before signing in.");
      return;
    }
    loginWithGoogle();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8"
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to BuildMend
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Your trusted home repair assistant
          </p>
        </div>
        <div className="mt-8 space-y-6">
          {/* Privacy Policy Checkbox */}
          <div className="flex items-center mb-4">
            <input
              id="privacy-policy"
              type="checkbox"
              checked={acceptedPrivacy}
              onChange={(e) => setAcceptedPrivacy(e.target.checked)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-900">
              I accept the{" "}
              <a href="/privacy-policy" className="text-blue-600 underline">
                Privacy Policy
              </a>{" "}
              and Terms of Service
            </label>
          </div>

          {/* Google Login Button */}
          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={handleGoogleLogin}
              className={`w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors ${!acceptedPrivacy ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              Continue with Google
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Prop validation
Login.propTypes = {
  setIsAuthenticated: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default Login;
