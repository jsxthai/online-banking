const initialState = {
    isWaitingOtp: false,
    hash: "",
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
