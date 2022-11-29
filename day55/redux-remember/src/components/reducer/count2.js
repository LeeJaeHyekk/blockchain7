const reducer = (state = 0, action) => {
  const { type } = action;
  switch (type) {
    case "count/plus":
      return state + 1;
    case "count2/minus":
      return state - 1;
    default:
      return state;
  }
};
export default reducer;
