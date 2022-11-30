import LoginComponent from "./Componets";
import { action } from "../../../modules/userinfo";
import store from "../../../modules/store";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginContainer = ({ userName }) => {
  const navigate = useNavigate();
  const onClick = (userId, userPw) => {
    store.dispatch(action.logIn(userId, userPw, store.getState().userDB));
  };
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
