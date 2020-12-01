import { Grid } from "@material-ui/core";
import Title from "../common/Title";
import FormTransfer from "../common/FormTransfer";
import FormOtp from "../common/FormOtp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchRecipientLists } from "../../actions/recipientList";

const InternalTransfer = () => {
    const infoAccount = useSelector((state) => state.loginReducer);
    const recipientLists = useSelector((state) => state.recipientLists);
    const internalTransfer = useSelector((state) => state.internalTransfer);
    const [state, setState] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (recipientLists.length <= 0) {
            dispatch(fetchRecipientLists(infoAccount.accountNumber));
        }
    }, []);

    useEffect(() => {
        setState(internalTransfer.isWaitingOTP);
    }, [internalTransfer]);

    console.log("is", internalTransfer);
    return (
        <Grid item xs={12} sm={8} md={6}>
            <Title>Internal Transfer</Title>
            {state === false ? (
                <FormTransfer
                    infoAccount={infoAccount}
                    recipientLists={recipientLists}
                />
            ) : (
                <FormOtp
                    infoAccount={infoAccount}
                    originHash={internalTransfer.hash}
                ></FormOtp>
            )}
        </Grid>
    );
};

export default InternalTransfer;
