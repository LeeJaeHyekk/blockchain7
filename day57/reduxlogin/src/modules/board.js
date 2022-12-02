const TYPE = {
  LIST: "board/list",
  ADD: "board/add",
  REMOVE: "board/remove",
  EDIT: "board/edit",
};
// 일거리들을 만들어 놨으니 해당 일거리에 대한 주문서(action)을 만들자
const add = (title, text, userName) => ({
  type: TYPE.ADD,
  payload: { title, text, userName },
});
const remove = (id) => ({ type: TYPE.REMOVE, payload: { id } });
const edit = (id, title, text) => ({
  type: TYPE.EDIT,
  payload: { id, title, text },
});
let id = 0;

export const action = { add, remove, edit };
export const initialize = [];
export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.ADD:
      const { title, text, userName } = payload;
      id++;
      //   cosnt tempArr =[...state]
      //   tempArr.unshift({})
      return [
        { id, title, text, userName, createdAt: new Date().toLocaleString() },
        // state가 아래있는 이유: 최신 입력된 값을 위로 올리기 위해서
        // id가 있는 이유 : 수정 삭제 때문에
        ...state,
        // {...payload , createAt: new Date()}
      ];
    case TYPE.REMOVE: {
      const index = state.findIndex((item) => item.id == payload.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    case TYPE.EDIT: {
      const index = state.findIndex((item) => item.id == payload.id);

      return [
        ...state.slice(0, index),
        { ...state[index], ...payload },
        ...state.slice(index + 1),
      ];
    }
    default:
      return state;
  }
};
