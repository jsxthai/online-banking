import * as api from "../api/fetchInfoAccount";
import { SET_ACCOUNT_LISTS } from "../constants/actionTypes";

export const fetchInfoAccount = (accountNumber) => async (dispatch) => {
    try {
        const response = await api.fetchInfoAccount(accountNumber);
        const payload = response.data;
        if (payload) {
            dispatch({ type: SET_ACCOUNT_LISTS, payload: payload });
        }
    } catch (error) {}
};
