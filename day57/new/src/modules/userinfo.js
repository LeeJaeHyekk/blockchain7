const TYPE = {
  LOGIN: "userInfo/login",
  LOGOUT: "userInfo/logout",
};

const logIn = (userId, password) => ({
  type: TYPE.LOGIN,
  payload: { userId, password },
});

const logOut = (userId) => ({ type: TYPE.LOGOUT, payload: { userId } });

export const action = { logIn, logOut };

export const initialize = {
  user: { userName: "", userId: "" },
};

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.LOGIN:
      return state;
    case TYPE.LOGOUT:
      return state;
    default:
      return state;
  }
};
