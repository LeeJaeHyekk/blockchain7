import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const newBoard = async (boardData) => {
  return (await request.post("/board/upload", boardData)).data;
};
