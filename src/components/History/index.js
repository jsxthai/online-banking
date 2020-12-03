import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Title from "../common/Title";
import { fetchHistory } from "../../actions/history";
import { useDispatch, useSelector } from "react-redux";
import dateFormat from "dateformat";

const History = () => {
    const accountNumber = useSelector(
        (state) => state.loginReducer.accountNumber
    );
    const history = useSelector((state) => state.history);
    const [rowsTable, setRowsTable] = useState("");

    console.log("account number", accountNumber);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHistory(accountNumber));
    }, [accountNumber]);
    console.log("history", history);

    useEffect(() => {
        if (history.transactionLists.length > 0) {
            const rows = history.transactionLists.map((item, key) => (
                <TableRow key={key}>
                    <TableCell component="th" scope="row">
                        {key + 1}
                    </TableCell>
                    <TableCell align="left">{item.accountDest}</TableCell>
                    <TableCell align="center">
                        <b>
                            {item.mount.toLocaleString("it-IT", {
                                // style: "currency",
                                currency: "VND",
                            })}{" "}
                            VND
                        </b>
                    </TableCell>
                    <TableCell align="center">{item.typeTrans}</TableCell>
                    <TableCell align="center">{item.detail}</TableCell>
                    <TableCell align="right">
                        {/* {dateFormat(item.date, "HH:MM:ss' - 'yyyy-mm-dd")} */}
                        {dateFormat(item.date, "HH:MM' - 'yyyy-mm-dd")}
                    </TableCell>
                </TableRow>
            ));
            setRowsTable(rows);
        }
    }, [history]);

    return (
        <>
            <Grid item xs={12} sm={10} md={8}>
                <Title>History</Title>
                <TableContainer component={Paper}>
                    <Table aria-label="caption table">
                        {/* <caption>A basic table example with a caption</caption> */}
                        <TableHead>
                            <TableRow>
                                <TableCell>Index</TableCell>
                                <TableCell align="left">
                                    Recipient number
                                </TableCell>
                                <TableCell align="center">Money</TableCell>
                                <TableCell align="center">Type</TableCell>
                                <TableCell align="center">Detail</TableCell>
                                <TableCell align="center">Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* // */}
                            {rowsTable || null}
                            {/* // */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </>
    );
};

export default History;
