import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
// import LanguageIcon from "@material-ui/icons/Language";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/logout";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const useStyles = makeStyles((theme) => ({
    secondaryColor: {
        color: "#f50057",
    },
    activeColor: {
        background: "linear-gradient(to right, #000428, #004e92)",
        color: "#f4f4f4",
    },
}));

export default function Menu() {
    let history = useHistory();
    const [isActive, setIsActive] = useState("");
    const classes = useStyles();

    function handleClickDashBoard() {
        history.push("/dashboard");
        setIsActive("das");
    }
    function handleClickInterTransfer() {
        history.push("/internal-transfer");
        setIsActive("nal");
    }
    // function handleClickInterbank() {
    //     history.push("/interbank");
    //     setIsActive("int");
    // }
    function handleClickDebtReminder() {
        history.push("/debt-reminder");
        setIsActive("deb");
    }
    function handleClickRecipientList() {
        history.push("/recipient-list");
        setIsActive("rec");
    }
    const dispatch = useDispatch();
    function handleClickLogout() {
        dispatch(logout());
    }
    return (
        <>
            <List>
                <ListItem
                    button
                    onClick={handleClickDashBoard}
                    className={isActive === "das" ? classes.activeColor : ""}
                >
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Dasboard"} />
                </ListItem>
                <ListItem
                    button
                    onClick={handleClickInterTransfer}
                    className={isActive === "nal" ? classes.activeColor : ""}
                >
                    <ListItemIcon>
                        <AccountBalanceIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Internal Transfer"} />
                </ListItem>
                {/* <ListItem
                    button
                    onClick={handleClickInterbank}
                    className={isActive === "int" ? classes.activeColor : ""}
                >
                    <ListItemIcon>
                        <LanguageIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Interbank"} />
                </ListItem> */}
                <ListItem
                    button
                    onClick={handleClickDebtReminder}
                    className={isActive === "deb" ? classes.activeColor : ""}
                >
                    <ListItemIcon>
                        <MoneyOffIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Debt Reminder"} />
                </ListItem>
                <ListItem
                    button
                    onClick={handleClickRecipientList}
                    className={isActive === "rec" ? classes.activeColor : ""}
                >
                    <ListItemIcon>
                        <PlaylistAddIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Recipient List"} />
                </ListItem>
            </List>

            <Divider />
            <List>
                <ListItem button onClick={handleClickLogout}>
                    <ListItemIcon>
                        <ExitToAppIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText
                        primary={"Logout"}
                        className={classes.secondaryColor}
                    />
                </ListItem>
            </List>
        </>
    );
}
