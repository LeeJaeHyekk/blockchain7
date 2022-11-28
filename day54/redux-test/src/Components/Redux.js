function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return { test: state.test + "1" };
    default:
      return state;
  }
}

export default reducer;
