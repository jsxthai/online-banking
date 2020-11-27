import React from "react";

import TextField from "@material-ui/core/TextField";
import { Button, Grid } from "@material-ui/core";

export default function Dashboard() {
    return (
        <Grid item xs={12} sm={10} md={6}>
            <form>
                <h1 style={{ textAlign: "center" }}>Online banking</h1>
                <div style={{ height: "20px" }}></div>
                <TextField
                    name="username"
                    // onChange={onChangeInputLogin}
                    // value={loginData.username}
                    fullWidth
                    label="Username"
                    margin="normal"
                    variant="outlined"
                    // InputProps={{
                    //     startAdornment: (
                    //         <InputAdornment position="start">
                    //             <AccountCircle />
                    //         </InputAdornment>
                    //     ),
                    // }}
                ></TextField>
                <TextField
                    name="password"
                    // onChange={onChangeInputLogin}
                    // value={loginData.password}
                    fullWidth
                    label="Password"
                    margin="normal"
                    variant="outlined"
                    type="password"
                    // InputProps={{
                    //     startAdornment: (
                    //         <InputAdornment position="start">
                    //             <Lock />
                    //         </InputAdornment>
                    //     ),
                    // }}
                ></TextField>
                <div style={{ height: "20px" }}></div>
                <Button
                    fullWidth
                    color="primary"
                    type="submit"
                    variant="contained"
                >
                    Log in
                </Button>

                <div style={{ height: "20px" }}></div>
                <Button>Forgot password ?</Button>
                <div style={{ height: "20px" }}></div>
            </form>
        </Grid>
    );
}
