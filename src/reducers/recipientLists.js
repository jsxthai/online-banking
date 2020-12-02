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
                lists: payload.recipient,
            };

        default:
            return state;
    }
}
