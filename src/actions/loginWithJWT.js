import * as api from "../api/loginWithJWT";
import { SET_LOGIN_ERROR, SET_LOGIN_SUCCESS } from "../constants/actionTypes";
import jwt_decode from "jwt-decode";

export const loginWithJWT = (accessToken) => async (dispatch) => {
    try {
        const response = await api.loginWithJWT(accessToken);
        if (response.data.status === 401) {
            dispatch({
                type: SET_LOGIN_ERROR,
                payload: { status: 401 },
            });
        } else {
            const token = response.data.accessToken;
            const payload = jwt_decode(token);
            document.cookie = `accessToken=${token}`;

            dispatch({
                type: SET_LOGIN_SUCCESS,
                payload: payload,
            });
        }
    } catch (error) {
        dispatch({
            type: SET_LOGIN_ERROR,
            payload: { status: 401 },
        });
    }
};
