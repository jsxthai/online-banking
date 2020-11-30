import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Grid } from "@material-ui/core";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("Frozen ", 159, 6.0, 24, 4.0),
    createData("Ice  ", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
];
const RecipientList = () => {
    return (
        <Grid item xs={12} sm={8} md={6}>
            <TableContainer component={Paper}>
                <Table aria-label="caption table">
                    {/* <caption>A basic table example with a caption</caption> */}
                    <TableHead>
                        <TableRow>
                            <TableCell>Index</TableCell>
                            <TableCell align="left">Account number</TableCell>
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
                                <TableCell align="left">{row.fat}</TableCell>
                                <TableCell align="center">
                                    <Button color="primary" variant="contained">
                                        A
                                    </Button>
                                </TableCell>
                                <TableCell align="center">
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                    >
                                        X
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default RecipientList;
