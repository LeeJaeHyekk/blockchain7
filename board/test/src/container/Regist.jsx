import AddBoardComponent from "../components/AddBoard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newBoard } from "../api";

const RegistContainer = () => {
  const [registData, setRegistData] = useState({
    title: "",
    text: "",
  });
  const changeId = (e) => {
    setRegistData((state) => ({ ...state, title: e.target.value }));
  };
  //   const navigate = useNavigate();

  const changePw = (e) => {
    setRegistData((state) => ({ ...state, text: e.target.value }));
  };
  const regist = async () => {
    console.log(registData);
    if (!registData.title || !registData.text) return;

    // const result = await newBoard(boardData);
    // console.log(result);
    // if (!result.isError) navigate("/");
  };
  return (
    <>
      <AddBoardComponent
        changefuncs={{ changeId, changePw }}
        // upload={upload}
        regist={regist}
      />
    </>
  );
};

export default RegistContainer;
