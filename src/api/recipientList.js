import axios from "axios";
axios.defaults.withCredentials = true;

const uri = process.env.REACT_APP_URI_SERVER || "http://localhost:7777";

export const fetchRecipientLists = (accountNumber) => {
    return axios.get(`${uri}/api/v2/recipient-lists/${accountNumber}`);
};

// updData = {
//     number ='',
//     name = ''
// }
export const updateARecipient = (accountNumber, data) => {
    return axios.put(`${uri}/api/v2/recipient-lists/${accountNumber}`, {
        number: data.number,
        name: data.name,
    });
};

export const addRecipient = (accountNumber, data) => {
    return axios.post(`${uri}/api/v2/recipient-lists/${accountNumber}`, {
        number: data.number,
        name: data.name,
    });
};

/// delete If a DELETE request includes an entity body, the body is ignored [...]
export const deleteARecipient = (accountNumber, data) => {
    return axios.delete(
        `${uri}/api/v2/recipient-lists/${accountNumber}?number=${data.number}&name=${data.name}`
    );
};
