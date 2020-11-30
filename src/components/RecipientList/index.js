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
import { fetchRecipientLists } from "../../actions/fetchRecipientList";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("Frozen ", 159, 6.0, 24, 4.0),
    createData("Ice  ", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
];
const RecipientList = () => {
    const recipientList = useSelector((state) => state.recipientLists);
    const accountNumber = useSelector(
        (state) => state.loginReducer["accountNumber"]
    );
    console.log("list:", recipientList);
    console.log("acc:", accountNumber);
    const [isTable, setIsTable] = useState(true);
    const [stateAddOrEdit, setStateAddOrEdit] = useState("add");

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRecipientLists(accountNumber));
    }, []);

    const handleClickRow = (row, type) => {
        console.log(type, row);
        if (type === "edit") {
            setStateAddOrEdit("edit");
            setIsTable(!isTable);
        }
    };

    const handleClickAddNew = () => {
        setStateAddOrEdit("add");
        setIsTable(!isTable);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (stateAddOrEdit === "edit") {
            //
        } else if (stateAddOrEdit === "add") {
            //
        }

        setIsTable(!isTable);
    };

    return (
        <Grid item xs={12} sm={8} md={6}>
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
                            name="account"
                            fullWidth
                            label="Account"
                            margin="normal"
                            required
                        />
                        <TextField
                            name="name"
                            fullWidth
                            label="Name"
                            margin="normal"
                            required
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
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="left">
                                            {row.calories}
                                        </TableCell>
                                        <TableCell align="left">
                                            {row.fat}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button
                                                color="primary"
                                                variant="contained"
                                                onClick={() =>
                                                    handleClickRow(row, "edit")
                                                }
                                            >
                                                E
                                            </Button>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button
                                                color="secondary"
                                                variant="contained"
                                                onClick={() =>
                                                    handleClickRow(row, "del")
                                                }
                                            >
                                                X
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            )}
        </Grid>
    );
};

export default RecipientList;
