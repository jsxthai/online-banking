import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { loginWithJWT } from "./actions/loginWithJWT";
// import { useEffect, useState } from "react";

function App() {
    const isLogin = useSelector((state) => state.loginReducer["isLogin"]);
    const [cookies] = useCookies(["accessToken"]);
    const dispatch = useDispatch();
    // console.log("token:", cookies.accessToken);
    console.log("is login", isLogin);

    // check token and login with token
    if (!isLogin) {
        const accessToken = cookies.accessToken;
        // if token -> await loading
        if (accessToken) {
            dispatch(loginWithJWT(accessToken));
            return <h3>Loading .......</h3>;
        }
    }

    return <>{isLogin === true ? <Home /> : <Login />}</>;
}

export default App;
