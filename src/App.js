import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { loginWithJWT } from "./actions/loginWithJWT";
// import { renewToken } from "./actions/renewToken";

function App() {
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.loginReducer["isLogin"]);
    const role = useSelector((state) => state.loginReducer["role"]);
    const [cookies] = useCookies(["accessToken"]);
    let accessToken = cookies.accessToken;

    // use component will mount sẽ  ko phải render 2 lần khi đăng nhập bằng jwt token
    if (!isLogin && accessToken) {
        // dispatch(renewToken());
        dispatch(loginWithJWT(accessToken));
    }

    return <>{isLogin === true && role === "user" ? <Home /> : <Login />}</>;
    // role === 'admin' -> return <Dashboard>
    //  <Dashboard> đã làm ở project trước
}

export default App;
