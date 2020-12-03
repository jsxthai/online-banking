import axios from "axios";
const uri = process.env.REACT_APP_URI_SERVER || "http://localhost:7777";

export const fetchHistory = (accountNumber) => {
    return axios.get(`${uri}/api/history/${accountNumber}`);
};
