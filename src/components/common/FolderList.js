import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
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

export default function SimpleCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <>
            <Card className={classes.root}>
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        Tài khoản thanh toán
                    </Typography>

                    <Typography
                        variant="body2"
                        component="p"
                        className={classes.flexContainer}
                    >
                        <p>126565846464</p> <p>999999$</p>
                    </Typography>
                </CardContent>
            </Card>
            <br />
            <Card>
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        Tài khoản tiết kiệm 1
                    </Typography>
                    <Typography
                        variant="body2"
                        component="p"
                        className={classes.flexContainer}
                    >
                        <p>126565846464</p> <p>999999$</p>
                    </Typography>
                </CardContent>
                <hr />
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        Tài khoản tiết kiệm 2
                    </Typography>
                    <Typography
                        variant="body2"
                        component="p"
                        className={classes.flexContainer}
                    >
                        <p>126565846464</p> <p>999999$</p>
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
