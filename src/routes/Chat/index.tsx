import { useEffect, useRef, useState } from "react";
import {
  Centered,
  Message,
  MessageInputContainer,
  MessagesWrapper,
} from "./styles";
import { Layout } from "../../components";
import { api } from "../../utils/api";
import { useLocation } from "react-router-dom";
import { Chat as ChatType, Message as MessageType } from "../../types";

import { io } from "socket.io-client";

export const Chat = () => {
  const location = useLocation();

  const bottomRef = useRef<HTMLDivElement>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [chat, setChat] = useState<ChatType>();
  const [messages, setMessages] = useState<
    Pick<MessageType, "user" | "text">[]
  >([]);
  const [newMessage, setNewMessage] = useState("");

  const currentUser = chat?.participants.find((user) => user.isCurrent);
  const otherParticipant = chat?.participants.find((user) => !user.isCurrent);

  const handleSendMessage = () => {
    api.post("/messages", { chat: chat?.id, text: newMessage });

    setMessages((prevState) =>
      prevState.concat({ text: newMessage, user: currentUser!.id })
    );
    setNewMessage("");
  };

  useEffect(() => {
    api
      .get(`/chats/${location.pathname.split("/")[2]}/messages`)
      .then((response) => {
        setChat(response.data.chat);
        setMessages(
          response.data.chat.messages.map((message: MessageType) => ({
            text: message.text,
            user: message.user,
          }))
        );
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const socket = io("http://localhost:3001", {
      transports: ["websocket"],
    });

    const callback = (message: MessageType) => {
      setMessages((prevState) =>
        prevState.concat({ text: message.text, user: message.user })
      );
    };

    socket.on(`whatsdown-chat-${chat?.id}-new-message`, callback);

    return () => {
      socket.off(`whatsdown-chat-${chat?.id}-new-message`, callback);
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (isLoading) {
    return (
      <Layout title="chats">
        <Centered>
          <span>wait...</span>
        </Centered>
      </Layout>
    );
  }

  return (
    <Layout title={"chat with " + otherParticipant?.name.toLowerCase()}>
      <MessagesWrapper>
        {messages.map((message, index) => {
          const isFromCurrentUser = String(message.user) === currentUser?.id;

          return (
            <Message key={String(index)} isFromCurrentUser={isFromCurrentUser}>
              <p>{message.text}</p>
            </Message>
          );
        })}

        <div ref={bottomRef} />
      </MessagesWrapper>
      <MessageInputContainer>
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="type here"
        />
        <button onClick={handleSendMessage}>
          <span>send</span>
        </button>
      </MessageInputContainer>
    </Layout>
  );
};
