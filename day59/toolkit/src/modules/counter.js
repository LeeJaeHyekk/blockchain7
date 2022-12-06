// const TYPE = { INCREMENT: "counter/increment", DECREMEMT: "counter/decrement" };
// const increment = () => ({
//   type: TYPE.INCREMENT,
// });
// const decrement = () => ({ type: TYPE.DECREMEMT });
// export const action = { increment, decrement };
// export const initialize = { count: 0 };
// export const reducer = (state = initialize, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case TYPE.INCREMENT:
//       return state + 1;
//     case TYPE.DECREMEMT:
//       return state - 1;
//     default:
//       return state;
//   }
// };

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const promiseTime = (count) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(count);
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
};
export const counterThunk = createAsyncThunk(
  // 첫번째 매개변수로 type의 이름을 설정한다.
  "count/countThunk",
  async (count) => {
    // 두번째 매개변수로 reducer를 작성한다.
    return await promiseTime(count);
  }
);
// createSlice로 actions,reducers 등등을 전부 한번에 생성한다.
const counterSlice = createSlice({
  name: "count",
  // acion위 이름 ,action의 타입에 '엑션명/리듀서명'으로 표기된다.
  //  state의 이름
  initialState: { value: 0, isLoding: false },
  //초기값, 객체로만 가능
  reducers: {
    // reducer를 만든다.
    increment: (state) => {
      state.value += 1;
      // 기존의 redux에서의 순수함수와는 달리 value를 직접 수정하는 방법도 가능하다
    },
    decrement: (state) => {
      state.value -= 1;
    },
    input: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    // 추가적인 리듀서를 작성한다.
    builder
      .addCase(counterThunk.pending, (state, action) => {
        // 작업 시작 직전에 실행된다
        state.isLoding = true;
      })
      .addCase(counterThunk.rejected, (state, action) => {
        // 작업 실패시 실행된다.
        state.isLoding = false;
      })
      .addCase(counterThunk.fulfilled, (state, action) => {
        // builder의 addCase 매서드를 사용해서 각 작업에 대해서 내용을 작성한다.
        // fulfilled의 경우 reducer가 성공적으로 완료 되었을 시에 실행하는 작업이다.
        state.value = action.payload;
        state.isLoding = false;
      });
  },
});
export const action = counterSlice.actions;
// create
// dispatch에 action으로 createSlice로 생성된 actions르 사용한다.
// dispatch(action)
export const reducer = counterSlice.reducer;
// store에 reducer으로 createSlice로 생성된 reducer를 사용한다.
