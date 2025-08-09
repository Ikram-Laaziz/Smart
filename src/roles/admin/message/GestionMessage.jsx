import React, { useState, useEffect } from "react";
import ListeMessage from "./ListeMessage";

export default function GestionMessage() {
  
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("messages");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const deleteMessage = (id) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  return (
    <>
      <ListeMessage messages={messages} deleteMessage={deleteMessage} />
    </>
  );
}
