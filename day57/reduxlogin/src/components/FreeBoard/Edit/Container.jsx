import EditComponent from "./Components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { action } from "../../../modules/board";
const EditContainer = () => {
  const { id } = useParams(useLocation());
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const item = useSelector((state) =>
    state.board.find((item) => item.id == id)
  );
  const onClick = (title, text) => {
    dispatch(action.edit(id, title, text));
    navigate(`board/${id}`);
  };
  return <EditComponent onClick={onClick} item={item} />;
};
export default EditContainer;
