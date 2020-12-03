import {
    GET_HISTORY_TRANSACTION_FAIL,
    GET_HISTORY_TRANSACTION_SUCCESS,
    CLEAR_GET_HISTORY,
} from "../constants/actionTypes";

const inititalState = {
    transactionLists: [],
    isGet: false,
};

export default function history(state = inititalState, { type, payload }) {
    switch (type) {
        case GET_HISTORY_TRANSACTION_SUCCESS:
            console.log("payload", payload);
            return {
                ...state,
                transactionLists: payload.trans,
                isFetch: true,
            };

        case GET_HISTORY_TRANSACTION_FAIL:
            return {
                ...state,
                isFetch: false,
            };

        case CLEAR_GET_HISTORY:
            return {
                ...state,
                isFetch: false,
            };
        default:
            return state;
    }
}
