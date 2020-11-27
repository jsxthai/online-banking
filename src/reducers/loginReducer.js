import {
    SET_LOGIN_SUCCESS,
    SET_LOGOUT,
    SET_LOGIN_ERROR,
} from "../constants/actionTypes";

const initialState = {
    isLogin: false,
    status: 0,
    accessToken: "",
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN_SUCCESS:
            return {
                isLogin: true,
                status: 200,
                accessToken: action.payload.accessToken,
            };
        case SET_LOGOUT:
            return {
                isLogin: false,
                status: 0,
                accessToken: "",
            };
        case SET_LOGIN_ERROR:
            return {
                ...state,
                isLogin: false,
                status: action.payload.status,
                accessToken: "",
            };
        default:
            return state;
    }
}
