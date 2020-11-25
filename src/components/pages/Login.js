import PropTypes from "prop-types";
import {
    Button,
    Grid,
    Hidden,
    InputAdornment,
    TextField,
} from "@material-ui/core";
import { AccountCircle, Lock } from "@material-ui/icons";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import axios from "axios";

const Login = () => {
    const reRef = useRef();

    const onSubmitWithReCAPTCHA = async (e) => {
        e.preventDefault();
        const token = await reRef.current.executeAsync();
        // console.log(token);
        reRef.current.reset();
        // post to server
        const apiUrl = "http://localhost:7777/api/auth-recaptcha";
        axios
            .post(apiUrl, {
                token,
            })
            .then((res) => console.log("res:", res.data))
            .catch((err) => console.log("err", err.response));
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
                <Grid item xs={10} sm={12} md={6}>
                    <form onSubmit={onSubmitWithReCAPTCHA}>
                        <h1 style={{ textAlign: "center" }}>Online banking</h1>
                        <div style={{ height: "20px" }}></div>
                        <TextField
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
