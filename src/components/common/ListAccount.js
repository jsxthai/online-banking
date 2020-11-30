import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    flexContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default function SimpleCard(props) {
    const classes = useStyles();

    const objAcc = props.accountLists;
    // console.log("savign", objAcc);
    // console.log(objAcc.savingsAccount.length);

    const row = objAcc.savingsAccount.map((item, index) => {
        return (
            <div key={index}>
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        Saving account {index + 1}
                    </Typography>
                    <Typography variant="body2" component="p"></Typography>
                    <div className={classes.flexContainer}>
                        <p>{item.number}</p> <b>{item.mount} VND</b>
                    </div>
                </CardContent>
                {index !== objAcc.savingsAccount.length - 1 ? <hr /> : ""}
            </div>
        );
    });
    return (
        <>
            <Card className={classes.root}>
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        Account number
                    </Typography>
                    <Typography variant="body2" component="p"></Typography>
                    <div className={classes.flexContainer}>
                        <p>{objAcc.accountNumber}</p>{" "}
                        <b>{objAcc.balance} VND</b>
                    </div>
                </CardContent>
            </Card>
            <br />
            <Card>
                {row}
                {/* <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        Tài khoản tiết kiệm 1
                    </Typography>
                    <Typography variant="body2" component="p"></Typography>
                    <div className={classes.flexContainer}>
                        <p>126565846464</p> <b>999999 $</b>
                    </div>
                </CardContent>
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        Tài khoản tiết kiệm 2
                    </Typography>
                    <Typography variant="body2" component="p"></Typography>
                    <div className={classes.flexContainer}>
                        <p>126565846464</p> <b>999999 $</b>
                    </div>
                </CardContent> */}
            </Card>
        </>
    );
}
