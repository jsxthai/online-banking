import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Route, BrowerRouter as Router } from "react-router-dom";
import Dashboard from "../common/DashBoard";
import { Grid } from "@material-ui/core";
import Nav from "../common/Nav";

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
            <Nav />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container justify="center">
                    {/* // */}
                    <Dashboard infoAccountList={"s"} />
                    {/* // */}
                </Grid>
            </main>
        </div>
    );
}
