import AddComponent from "./Components";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../modules/board";
const AddContainer = () => {
  const userName = useSelector((state) => state.userInfo.userName);
  const dispatch = useDispatch();
  //   connect가 필요가 없다.
  const onClick = (title, text) => {
    dispatch(action.add(title, text, userName));
  };
  //   title
  // userName
  //
  return !userName || <AddComponent onClick={onClick} />;
};
export default AddContainer;
