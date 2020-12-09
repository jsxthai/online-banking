import axios from "axios";
axios.defaults.withCredentials = true;

const uri = process.env.REACT_APP_URI_SERVER || "http://localhost:7777";

// data:
// {
//     "mount": 20000,
//     "detail": "chuyen tien",
//     "sign": "djasdnaskdasj",
//     "date": 8498434
// }
export const executeTransfer = (
    accountSource,
    accountDest,
    typeTrans,
    data
) => {
    if (!typeTrans) {
        typeTrans = "transfer";
    }
    // console.log("api", accountSource, accountDest, typeTrans, data);

    return axios.post(
        `${uri}/api/v2/internal-transfer/${accountSource}/${accountDest}?typeTrans=${typeTrans}`,
        {
            ...data,
        }
    );
};
