const initialState = {
    isWaitingOtp: false,
};

export default function internalTransfer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case "":
            return state;
        default:
            return state;
    }
}
