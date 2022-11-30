// 회원가입
const TYPE = { REGIST: "users/regist" };
// action
const regist = (userId, userPw, userName) => {
  // 8.regist를 호출당했다. userId, userPW, userName를 매개변수로 받았다.
  console.log("action regist");
  // 9.{type:type.Regist, payload:{userId ...}}를 반환했다. << action
  return {
    type: TYPE.REGIST,
    payload: { userId, userPw, userName },
  };
};

export const action = { regist };
export const initialize = [];
export const reducer = (state = initialize, action) => {
  // 12. dispatch가 액션()를 매개변수로 보내며 호출했다. state는 기존의 상태값이다.
  // state는 combineReducer의 사용 여부에 따라서 달라진다.
  console.log(reducer);
  const { type, payload } = action;
  console.log(state);
  // 13. 타입에 따라서 state를 재정의 한다. 재정의하고 싶은 정보를 return한다.
  switch (type) {
    case TYPE.REGIST:
      if (state.find((item) => item.userId === payload.userId)) return state;
      else return [...state, payload];
    default:
      return state;
  }
};
// 삼항연산자: 조건 ? 참 : 거짓
// isBool ? 'true' : 'false'
// 위를 if문을 써서 사용하려면
// function check(isBool) {
//   if (isBool) return "true";
//   else "false";
// }
// const temp = check(isBool);}
