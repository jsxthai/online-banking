import axios from "axios";
axios.defaults.withCredentials = true;
const uri = process.env.REACT_APP_URI_SERVER || "http://localhost:7777";

export const renewToken = () => {
    return axios.post(`${uri}/api/renew-token`);
};
