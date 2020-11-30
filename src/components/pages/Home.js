import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dashboard from "../DashBoard";
import { Grid } from "@material-ui/core";
import Nav from "../Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashBoard from "../DashBoard";
import InternalTransfer from "../InternalTransfer";
import InterBank from "../InterBank";
import DebtReminder from "../DebtReminder";
import News from "../common/News";

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
        <Router>
            <div className={classes.root}>
                <Nav />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Grid container justify="center">
                        <Switch>
                            <Route path="/" exact component={News} />
                            <Route
                                path="/dashboard"
                                exact
                                component={DashBoard}
                            />
                            <Route
                                path="/internal-transfer"
                                component={InternalTransfer}
                            />
                            <Route
                                path="/interbank"
                                exact
                                component={InterBank}
                            />
                            <Route
                                path="/debt-reminder"
                                exact
                                component={DebtReminder}
                            />
                        </Switch>
                    </Grid>
                </main>
            </div>
        </Router>
    );
}
