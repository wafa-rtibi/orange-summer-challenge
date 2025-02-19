import { createStore  } from "redux";
import {applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"; // synchronisation data
import rootReducer from "./reducers/index";

const composeEnHancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer, composeEnHancer(applyMiddleware(thunk)))

export default store;
