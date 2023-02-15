import AddBoardComponent from "../components/AddBoard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newBoard } from "../api";
const AddBoardContainer = () => {
  const [boardData, setBoardData] = useState({
    title: "",
    text: "",
  });
  const changeTitle = (e) => {
    setBoardData((state) => ({ ...state, title: e.target.value }));
  };
  const navigate = useNavigate();
  const changeText = (e) => {
    setBoardData((state) => ({ ...state, text: e.target.value }));
  };
  const upload = async () => {
    console.log(boardData);
    if (!boardData.title || !boardData.text) return;

    const result = await newBoard(boardData);
    console.log(result);
    if (!result.isError) navigate("/");
  };
  return (
    <>
      <AddBoardComponent
        changefuncs={{ changeTitle, changeText }}
        upload={upload}
      />
    </>
  );
};

export default AddBoardContainer;
