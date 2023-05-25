import axios from "axios";

const token = localStorage.getItem("@whatsdown/token") ?? "";

export const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
