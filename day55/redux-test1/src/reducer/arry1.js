const reducer = (state = [123, 234, 345], action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case "array1/Plus":
      return state.concat(payload);
    case "array1/Minus":
      let temp = state.map((item) => item);
      temp.pop();
      return temp;
    case "array1/shift":
      let temp1 = state.map((item) => item);
      // 원본을 바꾸지 않고 배열을 바꾸기 위헤서 맵을 써서 사용
      temp1.shift();
      return temp1;
    case "array1/slice":
      return state.slice(0, state.length - 1);
    default:
      return state;
  }
  // 배열에서 쓰는 forEach 문인데 길이가 배열의 길이만큼
};
export default reducer;
