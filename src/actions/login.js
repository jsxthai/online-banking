import * as api from "../api/login";
import { SET_LOGIN_ERROR, SET_LOGIN_SUCCESS } from "../constants/actionTypes";

export const loginWithRecaptcha = (recaptchaToken, loginData) => async (
    dispatch
) => {
    try {
        const response = await api.authLogin(recaptchaToken, loginData);
        if (response.status === 401) {
            dispatch({
                type: SET_LOGIN_ERROR,
                payload: { status: 401 },
            });
        } else {
            if (response.data.accessToken) {
                document.cookie = `accessToken=${response.data.accessToken}`;
            }
            // không có token vẫn đăng nhập vì username and pass đúng
            dispatch({
                type: SET_LOGIN_SUCCESS,
                payload: response.data,
            });
        }
    } catch (error) {
        dispatch({
            type: SET_LOGIN_ERROR,
            payload: { status: 401 },
        });
    }
};
