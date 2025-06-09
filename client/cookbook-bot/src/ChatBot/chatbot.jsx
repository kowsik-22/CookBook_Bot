// ChatBot/ChatBot.jsx
import React from 'react';
import './chatbot.css';
import { FaBars, FaArrowCircleRight } from 'react-icons/fa';

const ChatBot = () => {
  return (
    <div className="chatbot-container">
      <header className="chatbot-menu-icon">
        <FaBars size={20} />
      </header>

      <main className="chatbot-content">
        <h1>Ask. Cook. Enjoy.</h1>
        <div className="chatbot-input-box">
          <input
            type="text"
            placeholder="What would you like to cook today ?"
          />
          <button>
            <FaArrowCircleRight size={20} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default ChatBot;
