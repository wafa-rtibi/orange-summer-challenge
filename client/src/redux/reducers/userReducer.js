import { LOAD_USERS, GET_USERS, FAIL_USERS } from "../actions/ActionTypes";

const initialState = {
  users: [],
  load: false,
  error: null,
};

const reducerUser = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USERS:
      return { ...state, load: true };
    case GET_USERS:
      return { ...state, load: false, users: payload };
    case FAIL_USERS:
      return { ...state, load: false, error: payload };
    default:
      return state;
  }
};
export default reducerUser;
