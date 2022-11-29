export const COUNT1 = { PLUS: "count1/plus", MINUS: "count1/minus" };
const plus = (input) => {
  return { type: COUNT1.PLUS, payload: { input } };
};
const minus = (input) => {
  return { type: COUNT1.MINUS, payload: { input } };
};
export const action = { plus, minus };

// initialState = 초기값설정 reducer(state=initialState,action)
