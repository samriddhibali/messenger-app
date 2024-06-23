import { useState } from "react";
import "./ChatWindow.css";

const ChatWindow = ({
  friend,
  messages,
  sendMessage,
}: {
  friend: string;
  messages?: string[];
  sendMessage: (friend: string, message: string) => void;
}) => {
  const [newMessage, setNewMessage] = useState<string>("");

  const handleSendMessage = () => {
    if (newMessage) {
      sendMessage(friend, newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-window">
      <h2>Chat with {friend}</h2>
      <ul className="message-container">
        {messages?.map((msg: string, index: number) => (
          <li key={`${friend}-${index}`}>{msg}</li>
        ))}
      </ul>
      <div className="input-container">
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
