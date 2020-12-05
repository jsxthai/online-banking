import axios from "axios";
const uri = process.env.REACT_APP_URI_SERVER || "http://localhost:7777";

export const fetchHistory = (
    accountNumber,
    pageNumber = 1,
    limit = 10,
    typeTrans = undefined
) => {
    return axios.get(
        `${uri}/api/history/${accountNumber}?limit=${limit}&page=${pageNumber}&typeTrans=${typeTrans}`
    );
};
