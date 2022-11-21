import styled from "styled-components";
import Login from "./Login";
import LogOut from "./LogOut";
import Regist from "./Regist";
import { useEffect, useState } from "react";

export default function UserBox() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <UserStyled>
      <Regist users={users} setUsers={setUsers}></Regist>
      <Login users={users} setUser={setUser}></Login>
      <LogOut users={users} setUser={setUser}></LogOut>
    </UserStyled>
  );
}
const UserStyled = styled.div``;
