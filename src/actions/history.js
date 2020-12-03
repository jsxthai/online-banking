import * as api from "../api/history";
import {
    CLEAR_GET_HISTORY,
    GET_HISTORY_TRANSACTION_FAIL,
    GET_HISTORY_TRANSACTION_SUCCESS,
} from "../constants/actionTypes";

export const fetchHistory = (accountNumber) => async (dispatch) => {
    try {
        const response = await api.fetchHistory(accountNumber);
        const payload = response.data;
        if (payload) {
            dispatch({ type: CLEAR_GET_HISTORY });
            dispatch({ type: GET_HISTORY_TRANSACTION_SUCCESS, payload });
        } else {
            dispatch({ type: GET_HISTORY_TRANSACTION_FAIL });
        }
    } catch (error) {
        dispatch({ type: GET_HISTORY_TRANSACTION_FAIL });
        console.log(error.response);
    }
};
