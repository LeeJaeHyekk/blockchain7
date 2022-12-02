import BoardComponent from "./Components";

import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { action } from "../../../modules/board";
// import { useEffect } from "react";

const BoardContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams(useLocation());
  const item = useSelector((state) =>
    state.board.find((item) => item.id == id)
  );
  const userName = useSelector((state) => state.userInfo.userName);
  const remove = () => {
    dispatch(action.remove(item.id));
    navigate("/");
  };
  // useEffect(() => {
  //   if (!item) navigate("/");
  // }, [item]);
  return (
    <BoardComponent
      item={item}
      remove={remove}
      isCreator={userName == item.userName}
    />
  );
};
export default BoardContainer;
