// import React from "react";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import "../Styles/Chat.css";

const Chat = (props) => {
  const [newMessage, setNewMessage] = useState("");
  const { room } = props;

  const messagesRef = collection(db, "messages");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(newMessage);
    if (newMessage == "") return;

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });
    setNewMessage("");
  };

  return (
    <div className="chat-app">
      <form onSubmit={handleSubmit} className="new-message-form">
        <input
          className="new-message-input"
          type="text"
          placeholder="Type your message here....."
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
          value={newMessage}
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
