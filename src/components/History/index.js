import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Title from "../common/Title";

const History = () => {
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
                                    Account number
                                </TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="center">Edit</TableCell>
                                <TableCell align="center">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* // */}
                            {/* // */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </>
    );
};

export default History;
