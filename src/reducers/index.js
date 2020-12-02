import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import accountLists from "./accountLists";
import recipientLists from "./recipientLists";
import internalTransfer from "./internalTransfer";

export default combineReducers({
    loginReducer,
    accountLists,
    recipientLists,
    internalTransfer,
});
