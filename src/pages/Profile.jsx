import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCamera } from "react-icons/fa";

function Profile() {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState({ name: "", email: "", picture: "" });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login"); // Redirect to login if no user data found
    } else {
      setUserProfile(storedUser);
    }
  }, [navigate]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserProfile((prev) => ({
          ...prev,
          picture: reader.result,
        }));
        localStorage.setItem("user", JSON.stringify({ ...userProfile, picture: reader.result })); // Save updated picture
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="pt-16 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-lg rounded-lg p-8 border border-gray-200"
        >
          {/* Profile Picture & Basic Info */}
          <div className="text-center">
            <div className="relative inline-block">
              <img
                src= "https://lh3.googleusercontent.com/a/ACg8ocLTBkKJXwvdLZRbyJEjJ_GMhV1_iW977hl7AAXaXC7l0HsXzcND=s96-c"
                alt={userProfile.name}
                className="mx-auto h-32 w-32 rounded-full object-cover border border-gray-300"
              />
              <label
                htmlFor="profile-image"
                className="absolute bottom-1 right-1 bg-blue-600 text-white p-2 rounded-full cursor-pointer shadow-lg hover:bg-blue-700 transition"
              >
                <FaCamera className="h-5 w-5" />
                <input
                  type="file"
                  id="profile-image"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-gray-800">{userProfile.name}</h2>
            <p className="text-gray-500">{userProfile.email}</p>
          </div>

          {/* Account Information Section */}
          <div className="mt-8 border-t pt-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Account Information</h3>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Name</label>
                  <p className="mt-1 text-gray-900 font-medium">{userProfile.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Email</label>
                  <p className="mt-1 text-gray-900 font-medium">{userProfile.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="mt-8 border-t pt-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Preferences</h3>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-4">
              <div className="flex items-center">
                <input
                  id="notifications"
                  type="checkbox"
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="notifications" className="ml-2 text-gray-900">
                  Receive email notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="updates"
                  type="checkbox"
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="updates" className="ml-2 text-gray-900">
                  Receive product updates
                </label>
              </div>
            </div>
          </div>

          {/* Save Changes Button */}
          <div className="mt-8">
            <button
              type="button"
              className="w-full bg-blue-600 text-white px-5 py-3 rounded-md font-medium text-lg hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Profile;
