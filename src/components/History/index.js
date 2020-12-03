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
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { InputLabel, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    receiveColor: {
        color: "#4287f5",
        fontWeight: "bold",
    },
});
const History = () => {
    const classes = useStyles();

    const accountNumber = useSelector(
        (state) => state.loginReducer.accountNumber
    );
    let history = useSelector((state) => state.history);
    const [rowsTable, setRowsTable] = useState("");
    const [filterLists, setFilterLists] = useState([]);
    const [selectType, setSelectType] = useState("all");
    const [filter, setFilter] = useState({
        sortDate: true,
        sortMoney: true,
        sortType: true,
    });

    // console.log("account number", accountNumber);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHistory(accountNumber));
    }, [accountNumber]);
    // console.log("history", history);

    useEffect(() => {
        if (history.transactionLists.length > 0) {
            setFilterLists(history.transactionLists);
        }
    }, [history.transactionLists]);

    useEffect(() => {
        const rows = filterLists.map((item, key) => (
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
                <TableCell
                    className={
                        item.typeTrans === "receive" ? classes.receiveColor : ""
                    }
                    align="center"
                >
                    {item.typeTrans}
                </TableCell>
                <TableCell align="center">
                    {item.detail || "no comments"}
                </TableCell>
                <TableCell align="right">
                    {/* {dateFormat(item.date, "HH:MM:ss' - 'yyyy-mm-dd")} */}
                    {dateFormat(item.date, "HH:MM' - 'yyyy-mm-dd")}
                </TableCell>
            </TableRow>
        ));
        setRowsTable(rows);
    }, [filterLists, filter]);

    const handleSortDate = () => {
        const lists = filterLists.sort((a, b) => {
            if (a.date < b.date) return filter.sortDate ? 1 : -1;
            if (a.date > b.date) return !filter.sortDate ? 1 : -1;
            return 0;
        });
        setFilterLists(lists);
        setFilter({
            sortDate: !filter.sortDate,
        });
    };

    const handleSortMoney = () => {
        const lists = filterLists.sort((a, b) => {
            if (a.mount < b.mount) return filter.sortMoney ? 1 : -1;
            if (a.mount > b.mount) return !filter.sortMoney ? 1 : -1;
            return 0;
        });
        setFilterLists(lists);
        setFilter({
            sortMoney: !filter.sortMoney,
        });
    };

    const handleSelectType = (e) => {
        const value = e.target.value;
        setSelectType(value);
        if (value === "all") {
            setFilterLists(history.transactionLists);
            return;
        }
        // filter
        // value === type of data in database
        const lists = history.transactionLists.filter((item) => {
            return item.typeTrans === value;
        });
        setFilterLists(lists);
        setFilter({
            sortType: !filter.sortType,
        });
    };

    return (
        <>
            <Grid item xs={12} sm={10} md={8}>
                <Title>My history transaction</Title>
                <div style={{ height: "20px" }}></div>

                <InputLabel id="label ">Type</InputLabel>
                <Select
                    labelId="label"
                    id="select"
                    value={selectType}
                    style={{ width: "150px" }}
                    onChange={handleSelectType}
                >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="transfer">Transfer</MenuItem>
                    <MenuItem value="receive">Receive</MenuItem>
                </Select>
                <div style={{ height: "20px" }}></div>
                <TableContainer component={Paper}>
                    <Table aria-label="caption table">
                        {/* <caption>A basic table example with a caption</caption> */}
                        <TableHead>
                            <TableRow>
                                <TableCell>Index</TableCell>
                                <TableCell align="left">
                                    Recipient number
                                </TableCell>
                                <TableCell
                                    align="center"
                                    onClick={handleSortMoney}
                                    style={{ cursor: "pointer" }}
                                >
                                    Money
                                    {filter.sortMoney ? (
                                        <KeyboardArrowDownIcon fontSize="small" />
                                    ) : (
                                        <KeyboardArrowUpIcon fontSize="small" />
                                    )}
                                </TableCell>
                                <TableCell align="center">Type</TableCell>
                                <TableCell align="center">Detail</TableCell>
                                <TableCell
                                    align="center"
                                    onClick={handleSortDate}
                                    style={{ cursor: "pointer" }}
                                >
                                    Date
                                    {filter.sortDate ? (
                                        <KeyboardArrowDownIcon fontSize="small" />
                                    ) : (
                                        <KeyboardArrowUpIcon fontSize="small" />
                                    )}
                                </TableCell>
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
