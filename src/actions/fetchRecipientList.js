import * as api from "../api/fetchRecipientList";

export const fetchRecipientLists = (accountNumber) => async (dispatch) => {
    try {
        const response = await api.fetchRecipientLists(accountNumber);
        const payload = response.data;
        if (payload) {
            dispatch({ type: "GET_RECIPIENT_LISTS", payload: payload });
        }
    } catch (error) {}
};
