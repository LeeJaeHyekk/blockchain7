import { action, COUNT1 } from "../action/Count1";

const reducer = (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case "COUNT.PLUS":
      return state + payload.input;
    case "COUNT.MINUS":
      return state - payload.input;
    default:
      state;
  }
};
export default reducer;
