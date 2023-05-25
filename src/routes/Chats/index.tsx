import { useEffect, useState } from "react";
import { Button, Layout } from "../../components";
import { api } from "../../utils/api";

import { Chat as ChatType } from "../../types";
import { Centered, Chat, ChatsContainer } from "./styles";

export const Chats = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [chats, setChats] = useState<ChatType[]>([]);

  useEffect(() => {
    api
      .get("/chats")
      .then((response) => setChats(response.data.chats))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <Layout title="chats">
        <Centered>
          <span>wait...</span>
        </Centered>
      </Layout>
    );
  }

  if (chats.length === 0) {
    return (
      <Layout title="chats">
        <Centered>
          <Button linksTo="/chat/create">create new chat</Button>
        </Centered>
      </Layout>
    );
  }

  return (
    <Layout title="chats">
      <ChatsContainer>
        {chats.map((chat) => (
          <Chat key={chat.id} to={`/chat/${chat.id}`}>
            <h3>{chat.participants[0].name.toLowerCase()}</h3>
            <span>{chat.participants[0].email.toLowerCase()}</span>
          </Chat>
        ))}
      </ChatsContainer>
      <Button linksTo="/chat/create">create new chat</Button>
    </Layout>
  );
};
