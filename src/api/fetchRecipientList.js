import axios from "axios";

const uri = process.env.REACT_APP_URI_SERVER || "http://localhost:7777";

export const fetchRecipientLists = (accountNumber) => {
    return axios.get(`${uri}/api/v2/recipient-lists/${accountNumber}`);
};
