const initialState = {
    isWaitingOTP: false,
    hash: "",
};

export default function internalTransfer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case "SET_ORIGIN_HASH":
            return {
                isWaitingOTP: true,
                hash: payload,
            };
        default:
            return state;
    }
}
