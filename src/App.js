import Login from "./components/pages/Login";
import Home from "./components/pages/Home";

function App() {
    const stateLogin = false;

    return <>{stateLogin ? <Login /> : <Home />}</>;
}

export default App;
