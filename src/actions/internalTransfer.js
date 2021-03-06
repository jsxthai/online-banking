import * as api from "../api/internalTransfer";
import {
    EXECUTE_TRANSFER_SUCCESS,
    EXECUTE_TRANSFER_FAIL,
} from "../constants/actionTypes";

export const executeTransfer = (
    accountSource,
    accountDest,
    typeTrans,
    data,
    accessToken
) => async (dispatch) => {
    try {
        const response = await api.executeTransfer(
            accountSource,
            accountDest,
            typeTrans,
            data,
            accessToken
        );
        // console.log("action", accountSource, accountDest, typeTrans, data);
        const payload = response.data;
        if (payload.status === 201) {
            dispatch({ type: EXECUTE_TRANSFER_SUCCESS, payload: payload });
        } else {
            dispatch({ type: EXECUTE_TRANSFER_FAIL });
        }
    } catch (error) {
        dispatch({ type: EXECUTE_TRANSFER_FAIL });
    }
};
