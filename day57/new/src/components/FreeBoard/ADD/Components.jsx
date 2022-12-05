import { useState } from "react";
import styled from "styled-components";
const AddComponent = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <AddBox>
      <input
        type={"text"}
        value={title}
        onClick={(e) => {
          setTitle(e.target.value);
        }}
      />
    </AddBox>
  );
};
export default AddComponent;
const AddBox = styled.div``;
