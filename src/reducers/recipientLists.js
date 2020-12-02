import { GET_RECIPIENT_LISTS } from "../constants/actionTypes";

const initialState = {
    lists: [],
    isAdd: false,
};

export default function recipientReducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case GET_RECIPIENT_LISTS:
            return {
                ...state,
                lists: payload.recipient,
            };
        case "SET_ADD_RECIPIENT_FAIL":
            return {
                ...state,
                isAdd: false,
            };
        case "SET_ADD_RECIPIENT_SUCCESS":
            return {
                ...state,
                isAdd: true,
            };
        default:
            return state;
    }
}
