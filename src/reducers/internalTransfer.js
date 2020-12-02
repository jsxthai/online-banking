const initialState = {
    isWaitingOTP: false,
    isTransfer: false,
    hash: "",
    infoExecute: {},
};

export default function internalTransfer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case "SET_ORIGIN_HASH":
            return {
                ...state,
                isWaitingOTP: true,
                hash: payload,
            };
        case "FINAL_TRANSFER":
            return {
                ...state,
                isWaitingOTP: false,
                hash: "",
            };

        case "CANCEL_TRANSFER":
            return {
                ...state,
                isWaitingOTP: false,
                hash: "",
            };
        case "EXECUTE_TRANSFER_SUCCESS":
            return {
                ...state,
                isTransfer: true,
            };
        case "EXECUTE_TRANSFER_FAIL":
            return {
                ...state,
                isTransfer: false,
            };

        case "SET_INFO_TRANSFER":
            return {
                ...state,
                infoExecute: {
                    ...payload,
                },
            };
        default:
            return state;
    }
}
