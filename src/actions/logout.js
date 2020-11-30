export const logout = () => async (dispatch) => {
    if (window.confirm("Do you really want to leave?")) {
        // set the expires parameter to a passed date
        document.cookie =
            "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        await dispatch({ type: "SET_LOGOUT" });
    }
};
