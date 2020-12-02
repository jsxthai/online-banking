import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FormGroup } from "@material-ui/core";
import { useState } from "react";
import { verify } from "../../helpers/validateOtp";
import { useDispatch } from "react-redux";

const FormOtp = (props) => {
    const [otp, setOtp] = useState("");
    const dispatch = useDispatch();

    const handleVerifyOtp = () => {
        if (!otp) {
            alert("Pleese, enter OTP");
            return;
        }

        const otpNumber = parseInt(otp);
        const isOTP = verify(
            otpNumber,
            props.infoAccount.email,
            props.originHash
        );

        // console.log(otpNumber, props.infoAccount.email, props.originHash);
        if (isOTP) {
            // dispatch lại set waiting false, and ......
            dispatch({ type: "FINAL_TRANSFER" });
            alert(
                "OTP true, Transaction success, thank you for use our service"
            );
        } else {
            alert("OTP is false, try again");
        }
    };

    const handleCancelTrans = () => {
        if (window.confirm("You want cancel this transaction ?")) {
            dispatch({ type: "CANCEL_TRANSFER" });
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

                <div style={{ height: "20px" }}></div>
                <Button margin="normal" onClick={handleCancelTrans}>
                    Cancel{" "}
                </Button>
            </FormGroup>
        </>
    );
};

export default FormOtp;
