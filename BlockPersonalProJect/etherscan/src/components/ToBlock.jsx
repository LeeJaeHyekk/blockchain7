import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ToBlock = () => {
  const nav = useNavigate();
  return (
    <Next>
      <button
        onClick={() => {
          nav("/latestBlock");
        }}
      >
        to Blocks
      </button>
    </Next>
  );
};
export default ToBlock;

const Next = styled.div``;
