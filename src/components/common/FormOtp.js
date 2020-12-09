import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FormGroup } from "@material-ui/core";
import { useState } from "react";
import { verify } from "../../helpers/validateOtp";
import { useDispatch, useSelector } from "react-redux";
import { executeTransfer } from "../../actions/internalTransfer";
import { CANCEL_TRANSFER, FINAL_TRANSFER } from "../../constants/actionTypes";
import { useCookies } from "react-cookie";

const FormOtp = (props) => {
    const [cookies] = useCookies(["accessToken"]);
    let accessToken = cookies.accessToken;
    const [otp, setOtp] = useState("");
    const dispatch = useDispatch();
    const infoExecute = useSelector(
        (state) => state.internalTransfer.infoExecute
    );
    // console.log("infoExecute", infoExecute);

    const handleVerifyOtp = () => {
        if (!otp) {
            alert("Pleese, enter OTP");
            return;
        }

        const otpNumber = parseInt(otp);
        // console.log(otpNumber);
        const isOTP = verify(
            otpNumber,
            props.infoAccount.email,
            props.originHash
        );

        // console.log(otpNumber, props.infoAccount.email, props.originHash);
        if (isOTP) {
            // execute
            const data = {
                mount: infoExecute.mount,
                detail: infoExecute.detail,
                sign: infoExecute.sign,
                date: infoExecute.date,
            };
            dispatch(
                executeTransfer(
                    infoExecute.accountSource,
                    infoExecute.accountDest,
                    infoExecute.typeTrans,
                    data,
                    accessToken
                )
            );

            // set final waiting otp, re load main layout transfer
            dispatch({ type: FINAL_TRANSFER });

            alert("OTP is true.\nTransaction success.\nThank you use app.");
        } else {
            alert("OTP is false, try again");
        }
    };

    const handleCancelTrans = () => {
        if (window.confirm("You want cancel this transaction ?")) {
            dispatch({ type: CANCEL_TRANSFER });
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
