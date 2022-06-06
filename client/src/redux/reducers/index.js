import { combineReducers } from "redux";
import {reducerAuth} from './authReducer'
import  reducerItem  from "./itemReducer";
import reducerUser from "./userReducer";
const rootReducer = combineReducers({
  reducerAuth,
  reducerItem,
  reducerUser
});

export default rootReducer;
