const reducer = (state = 0, action) => {
  // state의 대체값을 0으로 정의한다.
  //   state의 대체값을 주지 않으면 오류가 발생한다.
  //   매개변수로 전달왼 state가 없으면 state는 0으로 정의된다.
  const { type } = action;
  //   if (!payload.input)
  switch (type) {
    case "count2/Plus":
      return state + 1;
    //   ...state << 기존에 state를 넣는다.
    //count1: state.count1 +payload.input << count1 프로퍼티에 payload로 받은 input 프로퍼티를 더한다.
    case "count2/Minus":
      return state - 1;
    default:
      return state;
  }
};
export default reducer;
