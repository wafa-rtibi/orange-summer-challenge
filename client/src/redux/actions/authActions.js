import axios from "axios";
import { SIGN_IN, SIGN_UP, LOG_OUT, FAIL_AUTH, LOAD_AUTH } from "./ActionTypes";

export const signin = (user) => async (dispatch) => {
  dispatch({ type: LOAD_AUTH });
  try {
    let result = await axios.post("/api/auth/signin", user);
    dispatch({ type: SIGN_IN, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_AUTH, payload: error });
  }
};

export const logout = () => {
  return { type: LOG_OUT };
};


