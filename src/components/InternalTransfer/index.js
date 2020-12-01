import { Grid } from "@material-ui/core";
import Title from "../common/Title";
import FormTransfer from "../common/FormTransfer";
import FormOtp from "../common/FormOtp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRecipientLists } from "../../actions/recipientList";

const InternalTransfer = () => {
    const infoAccount = useSelector((state) => state.loginReducer);
    const recipientLists = useSelector((state) => state.recipientLists);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("dissssssssssssss", recipientLists);
        if (recipientLists.length <= 0) {
            dispatch(fetchRecipientLists(infoAccount.accountNumber));
        }
    }, []);

    const waitingOTP = true;
    return (
        <Grid item xs={12} sm={8} md={6}>
            <Title>Internal Transfer</Title>
            {waitingOTP ? (
                <FormTransfer
                    infoAccount={infoAccount}
                    recipientLists={recipientLists}
                />
            ) : (
                <FormOtp></FormOtp>
            )}
        </Grid>
    );
};

export default InternalTransfer;
