import * as api from "../api/renewToken";
import { SET_LOGIN_ERROR, SET_LOGIN_SUCCESS } from "../constants/actionTypes";

export const renewToken = (accessToken) => async (dispatch) => {
    try {
        const response = await api.renewToken(accessToken);
        if (response.data.status === 401) {
            dispatch({
                type: SET_LOGIN_ERROR,
                payload: { status: 401 },
            });
        } else {
            dispatch({
                type: SET_LOGIN_SUCCESS,
                payload: response.data,
            });
            // server auto set cookie access token
        }
    } catch (error) {
        // console.log(error.response);
        dispatch({
            type: SET_LOGIN_ERROR,
            payload: { status: 401 },
        });
    }
};
