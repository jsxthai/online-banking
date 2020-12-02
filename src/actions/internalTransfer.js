import * as api from "../api/internalTransfer";

export const executeTransfer = (
    accountSource,
    accountDest,
    typeTrans,
    data
) => async (dispatch) => {
    try {
        const response = await api.executeTransfer(
            accountSource,
            accountDest,
            typeTrans,
            data
        );
        const payload = response.data;
        if (payload.status === 201) {
            dispatch({ type: "EXECUTE_TRANSFER_SUCCESS", payload: payload });
        } else {
            dispatch({ type: "EXECUTE_TRANSFER_FAIL" });
        }
    } catch (error) {
        dispatch({ type: "EXECUTE_TRANSFER_FAIL" });
    }
};
