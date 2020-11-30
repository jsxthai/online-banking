import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import accountLists from "./accountLists";
import recipientLists from "./recipientLists";

export default combineReducers({
    loginReducer,
    accountLists,
    recipientLists,
});
