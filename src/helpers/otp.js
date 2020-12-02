import otpGenerator from "otp-generator";

// create 6 number
export const createOtp = () => {
    return otpGenerator.generate(6, {
        upperCase: false,
        specialChars: false,
        alphabets: false,
    });
};
