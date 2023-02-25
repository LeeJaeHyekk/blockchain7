import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ToTx = () => {
  const nav = useNavigate();
  return (
    <Next>
      <button
        onClick={() => {
          nav("/latestTx");
        }}
      >
        to Txs
      </button>
    </Next>
  );
};
export default ToTx;

const Next = styled.div``;
