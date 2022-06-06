import {
  SIGN_IN,
  LOG_OUT,
  LOAD_AUTH,
  FAIL_AUTH,
} from "../actions/ActionTypes";

const initialState = {
  user: {},
  load: false,
  errors: [],
  isAuth: false,
};

export const reducerAuth = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_AUTH:
      return { ...state, load: true };

    case SIGN_IN:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("isAuth",true);
      localStorage.setItem("role", payload.role);
      return { ...state, load: false, user: payload.user, isAuth: true };
   
    case FAIL_AUTH:
      return { ...state, load: false, errors: payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      localStorage.setItem("isAuth", false);
      localStorage.removeItem("role");
      return { user: {}, load: false, errors: [], isAuth: false };
    default:
      return state;
  }
};
