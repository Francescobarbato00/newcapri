import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseSharp } from 'react-icons/io5';
import { FaPaperPlane } from 'react-icons/fa';

const ChatComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  const handleChatToggle = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (userMessage.trim() === '') return;

    const newMessage = {
      text: userMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sender: 'user',
    };

    setMessages((prevMessages) => [
      ...prevMessages,
      newMessage,
      {
        text: 'Risposta automatica del bot.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sender: 'bot',
      }
    ]);
    setUserMessage('');
  };

  // Varianti per l'animazione del container della chat
  const chatVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 1, y: 0 }, // Nessuna variazione di posizione o scala in uscita
  };

  return (
    <div className="fixed bottom-4 right-4 px-5 flex flex-col items-end z-50">
      {/* Bottone per aprire la chat */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={handleChatToggle}
        >
          <div
            className="relative bg-blue-500 text-white p-4 rounded-full border-4 border-white shadow-lg hover:shadow-xl"
            style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }}
          >
            <img src="fara.svg" alt="Chat Icon" className="w-8 h-8" />
          </div>
        </motion.div>
      )}

      {/* Finestra della chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="chat-window mt-4 w-96 sm:w-80 h-[500px] sm:h-[400px] bg-white rounded-lg shadow-2xl flex flex-col border border-gray-300 overflow-hidden"
          >
            {/* Header della chat */}
            <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-t-lg shadow-md">
              <p className="text-lg font-semibold text-white">Chat</p>
              <button
                className="text-white hover:text-gray-300 p-1 rounded-full transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <IoCloseSharp className="text-xl" />
              </button>
            </div>

            {/* Area messaggi */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`p-3 rounded-2xl max-w-xs text-sm shadow-md ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-black border border-gray-300'
                    }`}
                  >
                    <p>{message.text}</p>
                    <span className="block text-right text-xs text-gray-400 mt-1">
                      {message.time}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input e bottone invio */}
            <div className="flex items-center bg-white p-3 rounded-b-lg border-t border-gray-300 shadow-inner">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Scrivi un messaggio..."
                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button
                className="ml-2 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-all shadow-md"
                onClick={sendMessage}
              >
                <FaPaperPlane className="text-lg" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatComponent;
