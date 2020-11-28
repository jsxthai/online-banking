import Grid from "@material-ui/core/Grid";
import Title from "../Title";
import ListAccount from "../ListAccount";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchInfoAccount } from "../../../actions/fetchInfoAccount";

export default function DashBoard() {
    const account = useSelector((state) => state.loginReducer["accountNumber"]);
    const accountLists = useSelector((state) => state.accountList);
    const dispatch = useDispatch();
    // const [listsAcc, setListsAcc] = useState({});

    useEffect(() => {
        dispatch(fetchInfoAccount(account));
    }, [account]);
    return (
        <Grid item xs={12} sm={8} md={6}>
            <Title>Account</Title>
            <ListAccount accountLists={accountLists} />
        </Grid>
    );
}
