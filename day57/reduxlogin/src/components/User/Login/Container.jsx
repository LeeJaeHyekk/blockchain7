import LoginComponent from "./Componets";
import { action } from "../../../modules/userinfo";
import store from "../../../modules/store";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import axios from "axios";s

const LoginContainer = ({ userName }) => {
  const navigate = useNavigate();
  const onClick = (userId, userPw) => {
    store.dispatch(action.logIn(userId, userPw, store.getState().userDB));
    // axios.post("http://localhost:8080/api/user/login", {
    // userId,
    // userPw,
  };
  // );
  // };

  useEffect(() => {
    if (userName) navigate("/");
  }, [userName]);

  return <LoginComponent onClick={onClick} />;
};
const mapStateToProps = (state, props) => {
  return {
    userName: state.userInfo.userName,
  };
};

export default connect(mapStateToProps)(LoginContainer);
