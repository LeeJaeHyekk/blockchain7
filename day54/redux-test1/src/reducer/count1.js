const reducer = (state = 0, action) => {
  const { type, payload } = action;
  //   if (!payload.input)
  switch (type) {
    case "count1/Plus":
      return state + payload.input;
    //   ...state << 기존에 state를 넣는다.
    //count1: state.count1 +payload.input << count1 프로퍼티에 payload로 받은 input 프로퍼티를 더한다.
    // count1: state.count1+ payload 프로퍼티에  input프로퍼티를 더한다.
    case "count1/Minus":
      return state - payload.input;
    // reducer가 가져오는 state는 store 내의 count1이 된다.
    default:
      return state;
  }
};
export default reducer;
