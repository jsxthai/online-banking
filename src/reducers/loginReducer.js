import {
    SET_LOGIN_SUCCESS,
    SET_LOGOUT,
    SET_LOGIN_ERROR,
} from "../constants/actionTypes";

const initialState = {
    isLogin: false,
    status: 0,
    role: "",
    accountNumber: "",
    fullname: "",
    email: "",
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        // case "RENEW": {
        //     return {
        //         ...state,
        //         isLogin: true,
        //     };
        // }
        case SET_LOGIN_SUCCESS:
            return {
                isLogin: true,
                status: 200,
                role: action.payload.role,
                accountNumber: action.payload.accountNumber,
                fullname: action.payload.fullname,
                email: action.payload.email,
            };
        case SET_LOGOUT:
            return {
                ...state,
                isLogin: false,
                status: 0,
                role: "",
                accountNumber: "",
                fullname: "",
                email: "",
            };
        case SET_LOGIN_ERROR:
            return {
                ...state,
                isLogin: false,
                role: "",
                status: action.payload.status,
            };
        default:
            return state;
    }
}
