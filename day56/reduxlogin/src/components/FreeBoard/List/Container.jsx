import ListComponent from "./Components";
import { useSelector } from "react-redux";
const ListContainer = () => {
  const list = useSelector((state) => state.board);
  return <ListComponent list={list} />;
};
export default ListContainer;
