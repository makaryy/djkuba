import React from "react";
import Alert from "@material-ui/lab/Alert";
import useStyles from "../styles";

function AlertChecker({ alert, formSent }) {
    const classes = useStyles();
    if (alert) {
        return (
            <Alert severity="error" className={classes.FormAlert}>
                Musisz uzupełnić cały formularz
            </Alert>
        );
    } else if (formSent) {
        return (
            <Alert severity="success" className={classes.FormAlert}>
                Formularz został wysłany
            </Alert>
        );
    } else {
        return null;
    }
}

export default AlertChecker;
