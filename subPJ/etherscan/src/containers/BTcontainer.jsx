// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { newBlock } from "../api";
import Button from "../components/Button";
const ButtonContainer = () => {
  // const navigate = useNavigate();

  const sync = async () => {
    console.log("1");
    const result = await newBlock();
    return result;
  };
  return <Button sync={sync} />;
};
export default ButtonContainer;
