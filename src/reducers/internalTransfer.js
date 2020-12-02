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
        case "FINAL_TRANSFER":
            return {
                isWaitingOTP: false,
                hash: "",
            };

        case "CANCEL_TRANSFER":
            return {
                isWaitingOTP: false,
                hash: "",
            };
        default:
            return state;
    }
}
