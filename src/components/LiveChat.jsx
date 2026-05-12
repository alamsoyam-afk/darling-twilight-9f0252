import { motion } from "framer-motion";
import { useState } from "react";

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(true)}
          className="bg-accent text-white p-4 rounded-full shadow-lg hover:shadow-xl transition duration-300"
        >
          <span className="text-2xl">💬</span>
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col"
        >
          <div className="bg-accent text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Live Chat</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="bg-gray-100 p-3 rounded-lg mb-3">
              <p className="text-sm">Hi! How can we help you with your construction project today?</p>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent text-white px-4 py-2 rounded-r-lg hover:bg-yellow-600 transition duration-300">
                Send
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}