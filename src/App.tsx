import { useState } from "react";
import ChatWindow from "./ChatWindow";
import FriendList from "./FriendList";
import "./App.css";

const FRIENDS_LIST = ["Friend 1", "Friend 2", "Friend 3", "Friend 4"];
const App = () => {
  const [selectedFriend, setSelectedFriend] = useState<string>("");
  const [messages, setMessages] = useState<{ [key: string]: string[] }>({});

  const sendMessage = (friend: string, message: string) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [friend]: [...(prevMessages[friend] || []), message],
    }));
  };

  return (
    <div className="app">
      <FriendList
        friends={FRIENDS_LIST}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
      />
      {selectedFriend && (
        <ChatWindow
          friend={selectedFriend}
          messages={messages[selectedFriend] || []}
          sendMessage={sendMessage}
        />
      )}
    </div>
  );
};

export default App;
