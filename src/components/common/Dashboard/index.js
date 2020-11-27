import Grid from "@material-ui/core/Grid";
import Title from "../Title";
import FolderList from "../ListAccount";

export default function DashBoard() {
    return (
        <Grid xs={12} sm={8} md={6}>
            <Title>Account</Title>
            <FolderList />
        </Grid>
    );
}
