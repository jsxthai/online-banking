import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FormGroup } from "@material-ui/core";

const FormOtp = () => {
    return (
        <>
            <FormGroup row={0} style={{ width: "100px" }}>
                <TextField
                    margin="normal"
                    label="Enter otp"
                    variant="outlined"
                ></TextField>
                <Button variant="contained" color="secondary">
                    Transfer
                </Button>
            </FormGroup>
        </>
    );
};

export default FormOtp;
