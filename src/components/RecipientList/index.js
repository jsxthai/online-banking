import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Grid, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
    addRecipient,
    fetchRecipientLists,
    updateARecipient,
    deleteARecipient,
} from "../../actions/recipientList";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import formatN from "../../helpers/formatNumber";

const RecipientList = () => {
    const recipientList = useSelector((state) => state.recipientLists);
    const accountNumber = useSelector(
        (state) => state.loginReducer["accountNumber"]
    );
    const [isTable, setIsTable] = useState(true);
    const [stateAddOrEdit, setStateAddOrEdit] = useState("add");
    const [rows, setRows] = useState("");
    const [itemFocus, setItemFocus] = useState({
        number: "",
        name: "",
    });

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRecipientLists(accountNumber));
    }, []);

    useEffect(() => {
        if (recipientList.length > 0) {
            const row = recipientList.map((row, index) => (
                <TableRow key={row.number + index + 1}>
                    <TableCell component="th" scope="row">
                        {index + 1}
                    </TableCell>
                    <TableCell align="left">{formatN(row.number)}</TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="center">
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={() => handleClickRow(row, "edit")}
                            size="small"
                        >
                            <EditIcon fontSize="small" />
                        </Button>
                    </TableCell>
                    <TableCell align="center">
                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={() => handleClickRow(row, "del")}
                            size="small"
                        >
                            <DeleteIcon fontSize="small" />
                        </Button>
                    </TableCell>
                </TableRow>
            ));
            setRows(row);
        }
    }, [recipientList]);

    const handleClickRow = async (row, type) => {
        // console.log(type, row);
        if (type === "edit") {
            setStateAddOrEdit("edit");
            setIsTable(!isTable);
            setItemFocus(row);
            // handle edit
        } else if (type === "del") {
            // handle del
            if (window.confirm("Do you really want to DELETE?")) {
                await dispatch(deleteARecipient(accountNumber, row));
                dispatch(fetchRecipientLists(accountNumber));
            }
        }
    };

    const handleClickAddNew = () => {
        setStateAddOrEdit("add");
        setIsTable(!isTable);
        setItemFocus({ number: "", name: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (stateAddOrEdit === "edit") {
            // check không có thay đổi thì ko update
            await dispatch(updateARecipient(accountNumber, itemFocus));
            dispatch(fetchRecipientLists(accountNumber));
        } else if (stateAddOrEdit === "add") {
            //
            await dispatch(addRecipient(accountNumber, itemFocus));
            //  console.log("dis add", itemFocus);
        }

        setIsTable(!isTable);
    };

    const onChangeInput = (e) => {
        setItemFocus({
            ...itemFocus,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Grid item xs={12} sm={10} md={8}>
            <Button
                variant="contained"
                color="primary"
                onClick={handleClickAddNew}
            >
                {isTable ? "+ Add" : "Close"}
            </Button>
            <br />
            <br />

            {!isTable ? (
                <>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name="number"
                            fullWidth
                            label="Account number"
                            margin="normal"
                            required
                            value={itemFocus.number}
                            onChange={onChangeInput}
                        />
                        <TextField
                            name="name"
                            fullWidth
                            label="Name"
                            margin="normal"
                            required
                            value={itemFocus.name}
                            onChange={onChangeInput}
                        />
                        <div style={{ height: "20px" }}></div>

                        <Button
                            fullWidth
                            color="primary"
                            type="submit"
                            variant="contained"
                        >
                            {stateAddOrEdit === "add" ? "Add new" : "Update"}
                        </Button>
                    </form>
                </>
            ) : (
                <>
                    <TableContainer component={Paper}>
                        <Table aria-label="caption table">
                            {/* <caption>A basic table example with a caption</caption> */}
                            <TableHead>
                                <TableRow>
                                    <TableCell>Index</TableCell>
                                    <TableCell align="left">
                                        Account number
                                    </TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="center">Edit</TableCell>
                                    <TableCell align="center">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* // */}
                                {rows || null}
                                {/* // */}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            )}
        </Grid>
    );
};

export default RecipientList;
