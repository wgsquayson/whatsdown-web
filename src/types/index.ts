export type Chat = {
  id: string;
  participants: {
    id: string;
    name: string;
    email: string;
    isCurrent?: boolean;
  }[];
  messages: Message[];
};

export type Message = {
  _id: string;
  user: string;
  chat: string;
  text: string;
  createdAt: Date;
  __v: number;
};
