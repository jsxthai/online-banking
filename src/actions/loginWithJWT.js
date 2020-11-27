import * as api from "../api/loginWithJWT";
import { SET_LOGIN_ERROR, SET_LOGIN_SUCCESS } from "../constants/actionTypes";

export const loginWithJWT = (accessToken) => async (dispatch) => {
    try {
        const response = await api.loginWithJWT(accessToken);
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
        }
    } catch (error) {
        console.log(error.response);
        dispatch({
            type: SET_LOGIN_ERROR,
            payload: { status: 401 },
        });
    }
};
