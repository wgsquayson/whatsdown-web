import { createBrowserRouter, redirect } from "react-router-dom";
import { Login } from "./Login";
import { Chat } from "./Chat";
import { Chats } from "./Chats";
import { SignUp } from "./SignUp";
import { CreateChat } from "./CreateChat";

const isAuthenticated = () => {
  const token = localStorage.getItem("@whatsdown/token");

  return Boolean(token);
};

const loader = async () => {
  if (!isAuthenticated()) {
    return redirect("/login");
  }

  return null;
};

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Chats />,
    loader,
  },
  {
    path: "/chat/create",
    element: <CreateChat />,
    loader,
  },
  {
    path: "/chat/:chatId",
    element: <Chat />,
    loader,
  },
]);
