import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { loginWithJWT } from "./actions/loginWithJWT";
import Cookies from "js-cookie";

function App() {
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.loginReducer["isLogin"]);
    const role = useSelector((state) => state.loginReducer["role"]);
    let accessToken = Cookies.get("accessToken");

    // nếu token còn login bằng token
    if (isLogin === false && accessToken !== undefined) {
        dispatch(loginWithJWT(accessToken));
    }

    return <>{isLogin === true && role === "user" ? <Home /> : <Login />}</>;
}

export default App;
