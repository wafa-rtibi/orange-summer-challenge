import { LOAD_ITEM, GET_ITEM, FAIL_ITEM } from "./ActionTypes";
import axios from "axios";

export const getItem = () => async (dispatch) => {
  dispatch({ type: LOAD_ITEM });
  try {
    const result = await axios.get("/api/item/items");
    dispatch({ type: GET_ITEM, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_ITEM, payload: error.response });
  }
};

export const addItem = (newItem) => async (dispatch) => {
  try {
    await axios.post("/api/item/addItem", newItem);
    dispatch(getItem());
  } catch (error) {
    dispatch({ type: FAIL_ITEM, payload: error.response });
  }
};

export const editItem = (id, item) => async (dispatch) => {
  try {
    await axios.put(`/api/item/editOrDelete/${id}`, item);
    dispatch(getItem());
  } catch (error) {
    dispatch({ type: FAIL_ITEM, payload: error.response });
  }
};
export const removeItem = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/item/editOrDelete/${id}`);
    dispatch(getItem());
  } catch (error) {
    dispatch({ type: FAIL_ITEM, payload: error.response });
  }
};


