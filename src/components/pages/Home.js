import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Dashboard from "../common/Dashboard";
import { Grid } from "@material-ui/core";
import MiniDrawer from "../common/MiniDrawer";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));
export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <MiniDrawer />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container justify="center">
                    {/* // */}
                    <Dashboard />
                    {/* // */}
                </Grid>
            </main>
        </div>
    );
}
