import { useEffect, useState } from "react";
import { BoardComponent } from "../components/Board";
import { board } from "../api";

export const BoardContainer = () => {
  const [list, setlist] = useState([]);
  useEffect(() => {
    board({ limit: 10, offset: 0, order: [["id", "DESC"]] }).then(
      ({ isError, list }) => {
        console.log(isError);
        if (!isError) setlist(list);
      }
    );
  }, []);
  return <BoardComponent list={list} />;
};
