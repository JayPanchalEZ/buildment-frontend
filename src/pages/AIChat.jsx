import "./AIChat.css"; // Import CSS file
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollableFeed from "react-scrollable-feed";
import { FaPaperclip } from "react-icons/fa"; // Import attachment icon

function AIChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

  const [professionals] = useState([
    { name: "Prem Panchal", specialty: "Plumber", contact: "9898123669" },
    { name: "Harshit Bhai", specialty: "Electrician", contact: "7114173314" },
    { name: "Johnny Bhaiya", specialty: "Carpenter", contact: "6933299522" },
  ]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "40px";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        150
      )}px`;
    }
  }, [input]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setMessages([...messages, { type: "user-image", content: reader.result }]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    setMessages([...messages, { type: "user", content: trimmedInput }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full p-4 bg-gray-100 dark:bg-gray-900">
      <div className="flex-1 flex">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
          {/* Chat Section */}
          <div className="md:col-span-3 bg-white rounded-lg shadow-lg flex flex-col border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-800 p-4 border-b dark:text-white dark:border-gray-700">
              AI Chat
            </h2>

            {/* Scrollable Chat Messages */}
            <div className="chat-messages-container h-[65vh]">
              <ScrollableFeed className="scrollable-feed p-4">
                <div className="space-y-4">
                  {messages.length === 0 ? (
                    <p className="text-gray-500 text-center mt-4 dark:text-gray-400">
                      Start a conversation...
                    </p>
                  ) : (
                    messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.type.startsWith("user") ? "justify-end" : "justify-start"}`}
                      >
                        {message.type === "user-image" ? (
                          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
                            <img src={message.content} alt="Uploaded" className="w-full h-auto" />
                          </div>
                        ) : (
                          <div className={`message ${message.type === "user" ? "bg-blue-100" : "bg-gray-200"}`}>
                            {message.content}
                          </div>
                        )}
                      </motion.div>
                    ))
                  )}
                </div>
              </ScrollableFeed>
            </div>

            {/* Input Box (Fixed at Bottom) */}
            <form
              onSubmit={handleSubmit}
              className="flex gap-3 p-4 border-t bg-white input-area dark:bg-gray-800 dark:border-gray-700"
            >
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="p-2 text-gray-500 hover:text-blue-500 dark:text-gray-400"
              >
                <FaPaperclip className="w-5 h-5" />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 p-3 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 resize-none overflow-y-auto dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Type your message..."
                rows={1}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Send
              </button>
            </form>
          </div>

          {/* Professionals Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 h-full dark:bg-gray-800 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 dark:text-white">
              Nearby Professionals
            </h3>
            <div className="space-y-4">
              {professionals.map((pro, index) => (
                <div key={index} className="p-4 border-b last:border-0 dark:border-gray-600">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">{pro.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{pro.specialty}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{pro.contact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIChat;
