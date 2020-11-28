import * as api from "../api/renewToken";
import { SET_LOGIN_ERROR, SET_LOGIN_SUCCESS } from "../constants/actionTypes";
// import { decodeToken } from "react-jwt";
import jwt_decode from "jwt-decode";

export const renewToken = (accessToken) => async (dispatch) => {
    try {
        const response = await api.renewToken(accessToken);
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
        // console.log(error.response);
        dispatch({
            type: SET_LOGIN_ERROR,
            payload: { status: 401 },
        });
    }
};
