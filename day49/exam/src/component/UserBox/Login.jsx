import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Login({ users, setUser }) {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [ableId, setAbleId] = useState(false);
  const [ablePw, setAblePw] = useState(false);

  useEffect(() => {
    setId(userId.length ? userId.match(/[a-z]/gi)?.join("") : "");
    // a-z, A-Z 까지만 입력가능하도록 한다.
    if (userId.length < 5) {
    } else {
      setAbleId(true);
    }
  }, [userId]);
  useEffect(() => {
    if (userPw.length < 10) {
      setAblePw(false);
    } else {
      setAblePw(true);
    }
  }, [userPw]);
  function onLogin() {
    const tempUser = users.find((item) => item.userId === userId);
    if (tempUser && tempUser.userPw === userPw) setUser(tempUser.userId);
    // setUsers(state =>([...state,{userId, userPw}]))
    // user.push({userId , userPw}); 적용은 되나 절대적으로 권장하지 않는 방식이다.
    // setUsers(users);
  }
  return (
    <LoginBox>
      <input
        onInput={(e) => {
          setId(e.target.value);
        }}
        placeholder="ID"
        value={userId}
        type={"text"}
      />
      <input
        onInput={(e) => {
          setPw(e.target.value);
        }}
        placeholder="PW"
        value={userPw}
        type={"passwird"}
      />
      <button
        onClick={() => {
          if (!(ableId && ablePw)) return;
          onLogin();
        }}
      >
        로그인
      </button>
    </LoginBox>
  );
}
const LoginBox = styled.div``;
