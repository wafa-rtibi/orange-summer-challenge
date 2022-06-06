import { LOAD_USERS, GET_USERS, FAIL_USERS } from "./ActionTypes";
import axios from "axios";

export const getUsers = () => async (dispatch) => {
  dispatch({ type: LOAD_USERS });
  try {
    const result = await axios.get("/api/user/users");
    dispatch({ type: GET_USERS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.response });
  }
};

export const addUser = (newUser) => async (dispatch) => {
  try {
    await axios.post("/api/user/addUser", newUser);
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.response });
  }
};

export const editUser = (id, newUser) => async (dispatch) => {
  try {
    await axios.put(`/api/user/editOrDelete/${id}`, newUser);
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.response });
  }
};
export const removeUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/user/editOrDelete/${id}`);
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.response });
  }
};
