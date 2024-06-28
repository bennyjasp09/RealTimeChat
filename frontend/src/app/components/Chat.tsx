// src/app/components/Chat.tsx
"use client";

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ user: string, text: string }[]>([]);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('User');

  useEffect(() => {
    socket.on('message', (msg: { user: string, text: string }) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('sendMessage', { user: username, text: message }, () => setMessage(''));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-4 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Chat</h1>
        <div className="overflow-y-auto h-64 mb-4 border p-2">
          {messages.map((msg, index) => (
            <p key={index}><strong>{msg.user}:</strong> {msg.text}</p>
          ))}
        </div>
        <form onSubmit={sendMessage} className="flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            className="flex-1 p-2 border rounded-l"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
