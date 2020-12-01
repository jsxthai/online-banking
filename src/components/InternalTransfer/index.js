import { Grid } from "@material-ui/core";
import Title from "../common/Title";
import FormTransfer from "../common/FormTransfer";
import FormOtp from "../common/FormOtp";

const InternalTransfer = () => {
    const waitingOTP = true;
    return (
        <Grid item xs={12} sm={8} md={6}>
            <Title>Internal Transfer</Title>
            {waitingOTP ? <FormTransfer></FormTransfer> : <FormOtp></FormOtp>}
        </Grid>
    );
};

export default InternalTransfer;
