import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import accountList from "./accountList";

export default combineReducers({
    loginReducer,
    accountList,
});
