const reducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case "count2/Plus":
      return [state + payload.input];
    case "count2/Minus":
      return [state - payload.input];
    default:
      return state;
  }
};
export default reducer;
let sad = [];
