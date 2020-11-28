import Grid from "@material-ui/core/Grid";
import Title from "../Title";
import ListAccount from "../ListAccount";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchInfoAccount } from "../../../actions/fetchInfoAccount";

export default function DashBoard() {
    const account = useSelector((state) => state.loginReducer["fullname"]);
    console.log("acc", account);
    const dispatch = useDispatch();
    const [accountLists, setAccountList] = useState({});

    useEffect(() => {
        dispatch(fetchInfoAccount());
    }, []);

    return (
        <Grid item xs={12} sm={8} md={6}>
            <Title>Account</Title>
            <ListAccount />
        </Grid>
    );
}
