// Containers VS Componets
// Javascript 등의 로직 VS HTMl 구조

import Count1Clomp from "../components/Count1";
import store from "../store";
import { action } from "../modules/count1";
import { useState } from "react";
const Count1Container = () => {
  const count1 = store.getState().count1;
  const [_, render] = useState(true);

  const plus = () => {
    store.dispatch(action.plus);
    render((state) => !state);
  };
  const minus = () => {
    store.dispatch(action.minus);
    render((state) => !state);
  };
  const input = (input) => {
    store.dispatch(action.input(input));
    render((state) => !state);
  };

  return (
    <Count1Clomp count1={count1} plus={plus} minus={minus} input={input} />
  );
};
export default Count1Container;
