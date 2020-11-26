import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import { authLogin } from "../../api/loginApi";
import { useCookies } from "react-cookie";

const Login = () => {
    const reRef = useRef();
    const [cookies, setCookie, removeCookie] = useCookies(["thai"]);
    // console.log(cookies.thai);
    // setCookie("thai", "thai pham", {
    //     pathL: "/",
    // });
    // removeCookie("thai");
    const [loginData, setLoginData] = useState(() => {
        return {
            username: "",
            password: "",
        };
    });

    const onSubmitWithReCAPTCHA = async (e) => {
        e.preventDefault();
        const token = await reRef.current.executeAsync();
        reRef.current.reset();

        authLogin(token, loginData)
            .then((response) => console.log(response))
            .catch((err) => console.log(err.response));
    };

    const onChangeInputLogin = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Grid container style={{ maxHeight: "100vh" }}>
            <Hidden smDown>
                <Grid item md={6}>
                    <img
                        src="https://image.freepik.com/premium-vector/digital-banking-with-mobile-phone-technology-background_41921-13.jpg"
                        style={{
                            display: "block",
                            width: "100%",
                            maxHeight: "100vh",
                            objectFit: "cover",
                            overflow: "hidden",
                        }}
                        alt="login"
                    ></img>
                </Grid>
            </Hidden>

            <Grid
                container
                item
                md={6}
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={8} sm={6} md={6}>
                    <Hidden smUp>
                        <div style={{ height: "50px" }}></div>
                    </Hidden>
                    <form onSubmit={onSubmitWithReCAPTCHA}>
                        <h1 style={{ textAlign: "center" }}>Online banking</h1>
                        <div style={{ height: "20px" }}></div>
                        <TextField
                            name="username"
                            onChange={onChangeInputLogin}
                            value={loginData.username}
                            fullWidth
                            label="Username"
                            margin="normal"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                        ></TextField>
                        <TextField
                            name="password"
                            onChange={onChangeInputLogin}
                            value={loginData.password}
                            fullWidth
                            label="Password"
                            margin="normal"
                            variant="outlined"
                            type="password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock />
                                    </InputAdornment>
                                ),
                            }}
                        ></TextField>
                        <div style={{ height: "20px" }}></div>
                        <Button
                            fullWidth
                            color="primary"
                            type="submit"
                            variant="contained"
                        >
                            Log in
                        </Button>
                        <ReCAPTCHA
                            sitekey={
                                process.env.REACT_APP_RECAPTCHA_SITE_KEY ||
                                "6LcxqugZAAAAAHi1cVqmVx82ZvbporPhbLtVVZ8F"
                            }
                            size="invisible"
                            ref={reRef}
                        />
                        <div style={{ height: "20px" }}></div>
                        <Button>Forgot password ?</Button>
                        <div style={{ height: "20px" }}></div>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    );
};

// learn write prop types
const propTypes = {
    // arrayItem: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         id: PropTypes.number.isRequired,
    //         username: PropTypes.string.isRequired,
    //         password: PropTypes.string.isRequired,
    //     })
    // ).isRequired,
    onLogin: PropTypes.func,
};

const defaultProps = {
    onLogin: () => {},
};

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
