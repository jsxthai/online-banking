import * as api from "../api/recipientList";

export const fetchRecipientLists = (accountNumber) => async (dispatch) => {
    try {
        const response = await api.fetchRecipientLists(accountNumber);
        const payload = response.data;
        if (payload) {
            dispatch({ type: "GET_RECIPIENT_LISTS", payload: payload });
        }
    } catch (error) {}
};

export const updateARecipient = (accountNumber, updData) => async (
    dispatch
) => {
    try {
        const response = await api.updateARecipient(accountNumber, updData);
        const n = response.data.result.nModified;
        if (n > 0) {
            alert("Edit success");
        }
        if (n === 0) {
            alert("Not change");
        }
    } catch (error) {}
};

export const addRecipient = (accountNumber, data) => async (dispatch) => {
    try {
        const response = await api.addRecipient(accountNumber, data);
        const payload = response.data;
        // console.log("oayload", payload);
        if (payload.status !== 400) {
            dispatch({ type: "GET_RECIPIENT_LISTS", payload: payload });
        }
    } catch (error) {
        if (error.response.data.msg === "account recipient not found") {
            alert("Account recipient not found");
        }
        console.log(error.response);
    }
};

export const deleteARecipient = (accountNumber, data) => async (dispatch) => {
    try {
        const response = await api.deleteARecipient(accountNumber, data);
        // result , bên sever định nghĩa
        const n = response.data.result.nModified;
        if (n > 0) {
            alert("Delete success");
        }
        if (n === 0) {
            alert("Not change");
        }
    } catch (error) {
        console.log(error.response);
    }
};
