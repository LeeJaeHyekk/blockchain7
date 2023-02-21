import axios from "axios";
const request = axios.create({
  baseURL: "http://localhost:8082",
  headers: {
    "content-type": "application/json",
  },
});
export const newBlock = async (blockData) => {
  return (await request.post("/api/web3/makeNew", blockData)).data;
};
export const newTx = async (txData) => {
  return (await request.post("/api/transacton/tx", txData)).data;
};
