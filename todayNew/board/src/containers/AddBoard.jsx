import { useState } from "react";
import { newBoard } from "../api";
import AddBoardComponent from "../components/AddBoard";

const AddBoardContainer = () => {
  const [boardData, setBoardData] = useState({
    title: "",
    text: "",
  });
  const title = (e) => {
    setBoardData((state) => ({ ...state, title: e.target.value }));
  };

  const text = (e) => {
    setBoardData((state) => ({ ...state, text: e.target.value }));
  };
  console.log("board:", boardData);

  const upload = async () => {
    console.log("board:", boardData);
    const result = await newBoard(boardData);
  };
  return <AddBoardComponent funcs={{ title, text }} upload={upload} />;
};
export default AddBoardContainer;
