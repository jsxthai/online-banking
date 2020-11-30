import Grid from "@material-ui/core/Grid";
import Title from "../common/Title";
import ListAccount from "../common/ListAccount";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchInfoAccount } from "../../actions/fetchInfoAccount";

export default function DashBoard() {
    const account = useSelector((state) => state.loginReducer["accountNumber"]);
    const accountLists = useSelector((state) => state.accountLists);
    const dispatch = useDispatch();
    // const [listsAcc, setListsAcc] = useState({});
    console.log("acc", accountLists);
    useEffect(() => {
        dispatch(fetchInfoAccount(account));
    }, [account]);
    return (
        <Grid item xs={12} sm={8} md={6}>
            <Title>My account</Title>
            <ListAccount accountLists={accountLists} />
        </Grid>
    );
}
