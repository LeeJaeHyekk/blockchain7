import axios from "axios";
const request = axios.create({
  baseURL: "http://localhost:8082/api",
});
export const newBlock = async (blockData) => {
  return (await request.post("/web3/makeNew", blockData)).data;
};
export const latestBlock = async () => {
  return (await request.post("/block/latest")).data;
};
export const latestTx = async (data) => {
  return await request.post("/transaction/latest", data).data;
};
export const listBlock = async (data) => {
  return (await request.post("/block/listBlock", data)).data;
};
export const listTx = async (data) => {
  return (await request.post("/transaction/listTx", data)).data;
};
