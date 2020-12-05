import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json";

const uri = process.env.REACT_APP_URI_SERVER || "http://localhost:7777";

/**
 *
 * @param {String} recaptchaToken
 * @param {Object} loginData
 */
export const authLogin = (recaptchaToken, loginData) => {
    return axios.post(
        `${uri}/api/login-recaptcha`,
        {
            recaptchaToken,
            loginData,
        },
        {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        }
    );
};
