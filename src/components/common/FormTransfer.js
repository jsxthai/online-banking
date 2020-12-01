import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@material-ui/core";
import { useState } from "react";

const FormTransfer = (props) => {
    const [chooseRecipient, setChooseRecipient] = useState({
        number: "",
        name: "",
    });
    const [isChoose, setIsChoose] = useState(false);
    const [isChecking, setIsChecking] = useState(false);

    const handleChooseRecipient = () => {
        setIsChoose(!isChoose);
    };
    const handleConfirmRecipient = () => {
        setIsChoose(!isChoose);
        setIsChecking(false);
    };
    const handleCheckingAccount = () => {
        //if
        setIsChecking(true);
    };

    return (
        <>
            {isChoose ? (
                <>
                    <TextField
                        margin="normal"
                        label="Enter new recipient number"
                        fullWidth
                    ></TextField>
                    {isChecking ? (
                        <InputLabel error="true">
                            Account number: 00000000000, Author: Pham Thai
                        </InputLabel>
                    ) : (
                        ""
                    )}
                    <div style={{ height: "20px" }}></div>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleCheckingAccount}
                    >
                        Checking account
                    </Button>

                    <div style={{ height: "20px" }}></div>
                    <InputLabel>Or choose from list</InputLabel>

                    <FormControl fullWidth margin="normal">
                        <InputLabel>Choose recipient</InputLabel>
                        <Select>
                            <MenuItem value={10}>222222222222 - mymy</MenuItem>
                            <MenuItem value={20}>111111111111 - mymy</MenuItem>
                            <MenuItem value={30}>444444444444 - mymy</MenuItem>
                            <MenuItem value={40}>666666666666 - mymy</MenuItem>
                        </Select>
                    </FormControl>

                    <div style={{ height: "20px" }}></div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleConfirmRecipient}
                    >
                        Confirm and Back
                    </Button>
                </>
            ) : (
                <form>
                    <FormControl fullWidth>
                        <InputLabel id="demo-controlled-open-select-label">
                            Account number
                        </InputLabel>
                        <Select defaultValue={30}>
                            <MenuItem value={30}>222222222222 - Thai</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        margin="normal"
                        label="Click choose one recipient"
                        fullWidth
                        required
                        onClick={handleChooseRecipient}
                    ></TextField>

                    <TextField
                        margin="normal"
                        label="Money"
                        fullWidth
                        required
                    ></TextField>
                    <TextField
                        margin="normal"
                        label="Detail"
                        fullWidth
                        multiline
                        rows={3}
                    ></TextField>
                    <div style={{ height: "20px" }}></div>
                    <Button
                        type="submit"
                        margin="normal"
                        variant="contained"
                        color="primary"
                    >
                        Transfer
                    </Button>
                </form>
            )}
        </>
    );
};

// PropTypes
const propTypes = {
    recipientLists: PropTypes.array,
};

const defaultProps = {
    recipientLists: [],
};

FormTransfer.propTypes = propTypes;
FormTransfer.defaulProps = defaultProps;

export default FormTransfer;
