import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FormGroup } from "@material-ui/core";
import { useState } from "react";
import { verify } from "../../helpers/validateOtp";

const FormOtp = (props) => {
    const [otp, setOtp] = useState("");

    const handleVerifyOtp = () => {
        const otpNumber = parseInt(otp);
        const isOTP = verify(
            otpNumber,
            props.infoAccount.email,
            props.originHash
        );
        console.log(otpNumber, props.infoAccount.email, props.originHash);
        if (isOTP) {
            alert("otp true");
        } else {
            alert("otp false");
        }
    };
    return (
        <>
            <FormGroup style={{ width: "150px" }}>
                <TextField
                    margin="normal"
                    label="Enter otp"
                    variant="outlined"
                    value={otp}
                    onChange={(e) => {
                        setOtp(e.target.value);
                    }}
                ></TextField>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleVerifyOtp}
                >
                    Transfer
                </Button>
            </FormGroup>
        </>
    );
};

export default FormOtp;
