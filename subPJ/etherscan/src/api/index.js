import axios from "axios";
const request = axios.create({
  baseURL: "http://localhost:8080/api",
});
export const newBlock = async () => {
  console.log("2");
  return (await request.post("/block/new")).data;
};
