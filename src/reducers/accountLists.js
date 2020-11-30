import { SET_ACCOUNT_LISTS } from "../constants/actionTypes";

const initialState = {
    accountNumber: "",
    balance: 0,
    savingsAccount: [],
};

export default function accountListReducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case SET_ACCOUNT_LISTS:
            return {
                accountNumber: payload.accountNumber,
                balance: payload.balance,
                savingsAccount: payload.savingsAccount,
            };

        default:
            return state;
    }
}
