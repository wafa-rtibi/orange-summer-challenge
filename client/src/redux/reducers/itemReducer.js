import { LOAD_ITEM, GET_ITEM, FAIL_ITEM } from "../actions/ActionTypes";

const initialState = {
  items: [],
  load: false,
  error: null,
};

const reducerItem = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_ITEM:
      return { ...state, load: true };
    case GET_ITEM:
      return { ...state, load: false, items: [...payload] };
    case FAIL_ITEM:
      return { ...state, load: false, error: payload };
    default:
      return state;
  }
};
export default reducerItem;
