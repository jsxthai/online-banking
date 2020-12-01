import crypto from "crypto-js";

// in project
/**
 * use HMAC and SHA256
 * HMAC: đảm bảo tính toàn vẹn dữ liệu, hash with secret key
 * SHA256: Blockchain, 256 bit, hash, no decoded
 *
 */

const secretKey = process.env.SECRET_KET_OTP || "ioakdjaOTP"; // test
console.log("sec", secretKey);

// const ttl = 5 * 60 * 1000; // 5 minutes in milisecons
// exp = Date.now() + ttl (milisecons)
export const hash = (otp, email, exp) => {
    // create expt if null
    if (!exp) {
        const ttl = 5 * 60 * 1000;
        exp = Date.now() + ttl;
    }

    // data = dimawidma@gmail.com.822822.1989252556
    const data = `${email}.${otp}.${exp}`;

    // hash = dajsdkasldasdakslda
    const hash = crypto.HmacSHA256(data, secretKey);

    // originHash = dajsdkasldasdakslda.1989252556
    const originHash = `${hash}.${exp}`;
    return originHash;
};

// originHash lưu state (store) để check
// originHash = dajsdkasldasdakslda.1989252556
export const verify = (otp, email, originHash) => {
    const [hash, exp] = originHash.split(".");
    const now = Date.now();

    // expires
    if (exp > now) {
        return false;
    }
    const data = `${email}.${otp}.${exp}`;
    // crypto of reactjs return object => .toString()
    const newHash = crypto.HmacSHA256(data, secretKey).toString();
    if (hash === newHash) {
        return true;
    } else {
        return false;
    }
};
