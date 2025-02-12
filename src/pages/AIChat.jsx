import "./AIChat.css"; // Import CSS file
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollableFeed from "react-scrollable-feed"; // Import ScrollableFeed

function AIChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);

  const [professionals] = useState([
    { name: "Prem Panchal", specialty: "Plumber", contact: "9898123669" },
    { name: "Harshit Bhai", specialty: "Electrician", contact: "7114173314" },
    { name: "Johnny Bhaiya", specialty: "Carpenter", contact: "6933299522" },
  ]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "40px"; // Reset height
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        150
      )}px`; // Auto expand up to 150px max
    }
  }, [input]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    const trimmedInput = input.trim(); // Remove trailing spaces
    if (!trimmedInput) return; // Prevent sending empty messages

    setMessages([...messages, { type: "user", content: trimmedInput }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full p-4 bg-gray-100">
      <div className="flex-1 flex">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
          {/* Chat Section */}
          <div className="md:col-span-3 bg-white rounded-lg shadow-lg flex flex-col border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 p-4 border-b">
              AI Chat
            </h2>

            {/* Scrollable Chat Messages */}
            <div className="chat-messages-container h-[65vh] overflow-y-auto">
              <ScrollableFeed className="scrollable-feed p-4">
                <div className="space-y-2">
                  {messages.length === 0 ? (
                    <p className="text-gray-500 text-center mt-4">
                      Start a conversation...
                    </p>
                  ) : (
                    messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`p-3 rounded-lg max-w-[75%] shadow-sm ${message.type === "user"
                          ? "bg-blue-100 ml-auto text-right"
                          : "bg-gray-200"
                          }`}
                      >
                        <pre className="whitespace-pre-wrap">{message.content}</pre>
                      </motion.div>
                    ))
                  )}
                </div>
              </ScrollableFeed>
            </div>

            {/* Input Box (Fixed at Bottom) */}
            <form
              onSubmit={handleSubmit}
              className="flex gap-3 p-4 border-t bg-white input-area"
            >
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 p-3 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 resize-none overflow-y-auto"
                placeholder="Type your message..."
                rows={1}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Send
              </button>
            </form>
          </div>

          {/* Professionals Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 h-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Nearby Professionals
            </h3>
            <div className="space-y-4">
              {professionals.map((pro, index) => (
                <div key={index} className="p-4 border-b last:border-0">
                  <h4 className="font-medium text-gray-700">{pro.name}</h4>
                  <p className="text-sm text-gray-600">{pro.specialty}</p>
                  <p className="text-sm text-gray-500">{pro.contact}</p>
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
