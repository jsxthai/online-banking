import axios from "axios";

const uri = process.env.REACT_APP_URI_SERVER || "http://localhost:7777";
console.log("uri:", uri);

/**
 *
 * @param {String} recaptchaToken
 * @param {Object} loginData
 */
export const authLogin = (recaptchaToken, loginData) => {
    return axios.post(
        `${uri}/api/auth-recaptcha`,
        {
            recaptchaToken,
            loginData,
        },
        {
            timeout: 1000,
        }
    );
};
