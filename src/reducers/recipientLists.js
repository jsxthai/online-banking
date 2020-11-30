const initialState = [];

export default function recipientReducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case "GET_RECIPIENT_LISTS":
            console.log("[]", ...payload.recipient);
            return {
                ...payload.recipient,
            };

        default:
            return state;
    }
}
