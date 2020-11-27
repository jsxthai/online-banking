import axios from "axios";
// axios.defaults.withCredentials = true;
const uri = process.env.REACT_APP_URI_SERVER || "http://localhost:7777";
// console.log("uri:", uri);

/**
 *
 * @param {String} recaptchaToken
 * @param {Object} loginData
 */
export const authLogin = (recaptchaToken, loginData) => {
    return axios.post(`${uri}/api/login-recaptcha`, {
        recaptchaToken,
        loginData,
    });
};
