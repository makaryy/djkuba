import React from "react";
import { Paper, Typography } from "@material-ui/core";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import KeyboardOutlinedIcon from "@material-ui/icons/KeyboardOutlined";
import useStyle from "../styles";

function Contact() {
    const classes = useStyle();

    return (
        <div>
            <Paper className={classes.Paper}>
                <Typography variant="h4" align="center" gutterBottom>
                    Zapraszam do kontaktu
                </Typography>
                <Typography align="center" variant="h6">
                    <CallOutlinedIcon /> +48 504 005 709
                </Typography>
                <Typography align="center" variant="h6">
                    <EmailOutlinedIcon /> kontakt@djkuba.pl
                </Typography>
                <Typography align="center" variant="h6">
                    <KeyboardOutlinedIcon /> Możesz również zgłosić się poprzez
                    formularz poniżej
                </Typography>
            </Paper>
        </div>
    );
}

export default Contact;
