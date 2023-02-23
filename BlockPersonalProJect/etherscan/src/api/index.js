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
export const latestTx = async () => {
  return (await request.post("/transacton/latest")).data;
};
export const listBlock = async () => {
  return (await request.post("/block/listBlock")).data;
};
export const listTx = async () => {
  return (await request.post("/transacton/listTx")).data;
};
