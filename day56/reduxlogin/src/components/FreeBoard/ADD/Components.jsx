import styled from "styled-components";
import { useState } from "react";

const AddComponent = ({ onClick }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  return (
    <AddBox>
      <input
        type={"text"}
        placeholder={"title"}
        value={title}
        onInput={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        value={text}
        placeholder="Test"
        onInput={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onClick(title, text);
        }}
      >
        AddBtn
      </button>
    </AddBox>
  );
};
export default AddComponent;
const AddBox = styled.div``;
