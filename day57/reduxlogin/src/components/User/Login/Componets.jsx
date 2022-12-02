import { useState } from "react";
import styled from "styled-components";
const LoginComponent = ({ onClick }) => {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  return (
    <LoginBox>
      <input
        type={"text"}
        value={userId}
        onInput={(e) => {
          setId(e.target.value);
        }}
        placeholder={"ID"}
      />
      <input
        type={"password"}
        value={userPw}
        onInput={(e) => {
          setPw(e.target.value);
        }}
        placeholder={"PW"}
      />
      <button
        onClick={() => {
          onClick(userId, userPw);
        }}
      >
        Login
      </button>
    </LoginBox>
  );
};
export default LoginComponent;
const LoginBox = styled.div`
  padding: 5px;
`;
