import crypto from "crypto-js";

// in project
/**
 * use HMAC and SHA256
 * HMAC: đảm bảo tính toàn vẹn dữ liệu, hash with secret key
 * SHA256: Blockchain, 256 bit, hash, no decoded
 *
 */

const secretKey = process.env.REACT_APP_SECRET_KET_OTP || "ioakdjaOTPlocal"; // test
// console.log("sec", secretKey);

// const ttl = 5 * 60 * 1000; // 5 minutes in milisecons
// exp = Date.now() + ttl (milisecons)
export const hash = (otp, email, exp) => {
    // create expt if null
    if (!exp) {
        const ttl = 1 * 60 * 1000; // 1 min // text
        exp = Date.now() + ttl;
    }

    // data = dimawidma@gmail.com.822822.1989252556
    const data = `${email}.${otp}.${exp}`;

    // hash = dajsdkasldasdakslda
    const hash = crypto.HmacSHA256(data, secretKey);

    // originHash = dajsdkasldasdakslda.1989252556
    const originHash = `${hash}.${exp}`;
    // console.log(originHash);
    return originHash;
};

// originHash lưu state (store) để check
// originHash = dajsdkasldasdakslda.1989252556
export const verify = (otp, email, originHash) => {
    const [hash, exp] = originHash.split(".");
    const now = Date.now();
    // console.log(hash, parseInt(exp), now);
    // expires
    if (parseInt(exp) < now) {
        // console.log("expires");
        return false;
    }
    const data = `${email}.${otp}.${exp}`;
    // crypto of reactjs return object => .toString()
    const newHash = crypto.HmacSHA256(data, secretKey).toString();
    // console.log(hash, newHash);
    if (hash === newHash) {
        return true;
    } else {
        return false;
    }
};
