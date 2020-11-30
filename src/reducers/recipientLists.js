import { GET_RECIPIENT_LISTS } from "../constants/actionTypes";

const initialState = [];

export default function recipientReducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case GET_RECIPIENT_LISTS:
            return payload.recipient;

        default:
            return state;
    }
}
