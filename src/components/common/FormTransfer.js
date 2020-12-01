import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { createOtp } from "../../helpers/otp";

// PropTypes
const propTypes = {
    recipientLists: PropTypes.array,
};

const defaultProps = {
    recipientLists: [],
};

const FormTransfer = (props) => {
    const [selectRecipient, setSelectRecipient] = useState({
        number: "",
    });
    const [recipientLists, setRecipientLists] = useState("");

    const handleSelectRecipient = (e) => {
        setSelectRecipient({
            number: e.target.value,
        });
    };

    const handleSubmitTransfer = (e) => {
        e.preventDefault();
        const otp = createOtp();
        alert(otp);
    };

    useEffect(() => {
        if (props.recipientLists.length > 0) {
            const rows = props.recipientLists.map((item, key) => (
                <MenuItem key={item.number} value={item.number}>
                    {item.number} - {item.name}
                </MenuItem>
            ));
            setRecipientLists(rows);
        }
    }, [props.recipientLists]);

    return (
        <>
            <form onSubmit={handleSubmitTransfer}>
                <FormControl fullWidth margin="normal">
                    <InputLabel id="demo-controlled-open-select-label">
                        Account number
                    </InputLabel>
                    <Select defaultValue={"a"}>
                        <MenuItem value={"a"}>
                            {props.infoAccount.accountNumber}
                            {" - "}
                            {props.infoAccount.fullname}
                        </MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <InputLabel>Choose recipient</InputLabel>
                    <Select
                        required
                        value={selectRecipient.number}
                        onChange={handleSelectRecipient}
                    >
                        {recipientLists}
                    </Select>
                </FormControl>

                <TextField
                    margin="normal"
                    label="Money (number)"
                    fullWidth
                    required
                    type="number"
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
        </>
    );
};

FormTransfer.propTypes = propTypes;
FormTransfer.defaulProps = defaultProps;

export default FormTransfer;
