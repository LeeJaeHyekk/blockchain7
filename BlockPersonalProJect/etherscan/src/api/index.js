import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const newBlock = async (blockData) => {
  return (await request.post("/block/check", blockData)).data;
};
