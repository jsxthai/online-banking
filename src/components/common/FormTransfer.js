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
import { hash } from "../../helpers/validateOtp";
import { useDispatch } from "react-redux";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { useCookies } from "react-cookie";
import {
    SET_ORIGIN_HASH,
    SET_INFO_TRANSFER,
} from "../../constants/actionTypes";
const user_mail_id =
    process.env.REACT_APP_USER_MAIL_ID || "user_VsSTDePhTNnJM2kZfuqHf"; // test
init(user_mail_id);

// PropTypes
const propTypes = {
    recipientLists: PropTypes.array,
};

const defaultProps = {
    recipientLists: [],
};

const FormTransfer = (props) => {
    const [cookie] = useCookies();
    // console.log(cookie.accessToken);
    const dispatch = useDispatch();
    const [infoForm, setInfoForm] = useState({
        accountDest: "",
        mount: "",
        detail: "",
    });
    const [selectRecipient, setSelectRecipient] = useState({
        number: "",
    });

    // list html
    const [recipientLists, setRecipientLists] = useState("");

    const handleSelectRecipient = (e) => {
        setSelectRecipient({
            number: e.target.value,
        });
        setInfoForm({
            ...infoForm,
            accountDest: e.target.value,
        });
    };

    const handleChangeForm = (e) => {
        setInfoForm({
            ...infoForm,
            [e.target.name]: e.target.value,
        });
        // console.log("info", infoForm);
    };

    const handleSubmitTransfer = async (e) => {
        e.preventDefault();
        const otp = createOtp();
        const originHash = await hash(otp, props.infoAccount.email);
        // console.log(originHash);
        dispatch({ type: SET_ORIGIN_HASH, payload: originHash });
        // Test nhanh không qua mail
        alert(
            "This otp sent to email of account, check again\nOTP testing: " +
                otp
        );
        const templateParams = {
            fullname: props.infoAccount.fullname,
            otp: otp,
        };

        const service_id =
            process.env.REACT_APP_SERVICE_MAIL_ID || "service_gsfl6u3"; // test
        const template_id =
            process.env.REACT_APP_TEMPLATE_MAIL_ID || "template_1k69xoo"; // test

        // sendForm => send
        const result = await emailjs.send(
            service_id,
            template_id,
            templateParams
        );
        if (result) {
            console.log("send mail SUCCESS ", result);
        } else {
            console.log("send mail FAILED...");
        }

        // setup info ready execute transfer to server, after confirm otp
        const infoExecute = {
            accountSource: props.infoAccount.accountNumber,
            accountDest: infoForm.accountDest,
            mount: parseInt(infoForm.mount),
            detail: infoForm.detail,
            sign: cookie.accessToken || "inertnal bank",
            date: Date.now(),
        };
        dispatch({ type: SET_INFO_TRANSFER, payload: infoExecute });

        // console.log("infoExecute", infoExecute);
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
                    name="mount"
                    value={infoForm.mount}
                    onChange={handleChangeForm}
                ></TextField>
                <TextField
                    margin="normal"
                    label="Detail"
                    fullWidth
                    multiline
                    rows={3}
                    name="detail"
                    value={infoForm.detail}
                    onChange={handleChangeForm}
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
