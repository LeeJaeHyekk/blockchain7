const TYPE = {
  PLUS: "count2/plus",
  MINUS: "count2/minus",
  INPUT: "count2/input",
}; // action에 대한 type을 미리 정의함
const plus = {
  type: TYPE.PLUS,
}; // plus에 대한 action
const minus = {
  type: TYPE.MINUS,
}; // minus에 대한 action
const input = (input) => ({ type: TYPE.INPUT, payload: { input } }); // input에 대한 action을 return하는 함수

export const initialize = { count2: 0 };

export const reducer = (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.PLUS:
      return state + 2;
    case TYPE.MINUS:
      return state - 2;
    case TYPE.INPUT:
      return payload.input;
    default:
      return state;
  }
};
export const action = { plus, minus, input };
