import React from "react";
import { useState } from "react";

import moment from "moment";

import { Paper, TextField, Button, Grid } from "@material-ui/core";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import useStyles from "../styles";

import { sendMessage } from "../api/index";
import AlertChecker from "./AlertChecker";

function Form() {
    const classes = useStyles();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        partyType: "",
        message: "",
        date: new Date()
    });

    const [alert, setAlert] = useState(false);
    const [formSent, setFormSent] = useState(false);

    const sendForm = () => {
        const {
            firstName,
            lastName,
            email,
            phoneNumber,
            partyType,
            date,
            message
        } = formData;

        if (
            firstName === "" ||
            lastName === "" ||
            email === "" ||
            phoneNumber === "" ||
            partyType === "" ||
            date === "" ||
            message === ""
        ) {
            setAlert(true);
        } else {
            const mailData = {
                from: `${firstName} ${lastName} (tel. ${phoneNumber}) <${email}>`,
                to: "makaryyrakam@gmail.com",
                subject: `${partyType} ${moment(date).format("DD/MM/yyyy")}`,
                text: `${message} `
            };

            sendMessage(mailData);
            setAlert(false);
            setFormSent(true);
            clearForm();
        }
    };

    const clearForm = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            partyType: "",
            message: "",
            date: new Date()
        });
    };

    return (
        <Paper className={classes.Paper}>
            <AlertChecker alert={alert} formSent={formSent} />
            <form>
                <Grid container alignItems="center" spacing={3}>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            required
                            name="firstName"
                            placeholder="Jan"
                            label="Imię"
                            fullWidth
                            variant="outlined"
                            value={formData.firstName}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    firstName: e.target.value
                                })
                            }
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            required
                            name="lastName"
                            placeholder="Kowalski"
                            label="Nazwisko"
                            fullWidth
                            variant="outlined"
                            value={formData.lastName}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    lastName: e.target.value
                                })
                            }
                        />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <TextField
                            required
                            name="email"
                            type="email"
                            placeholder="adres@poczta.pl"
                            label="E-mail"
                            fullWidth
                            variant="outlined"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value
                                })
                            }
                        />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <TextField
                            required
                            name="phoneNumber"
                            placeholder="504005709"
                            label="Nr telefonu"
                            fullWidth
                            variant="outlined"
                            value={formData.phoneNumber}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    phoneNumber: e.target.value
                                })
                            }
                        />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <TextField
                            required
                            name="partyType"
                            placeholder="Wesele/urodziny/jubileusz"
                            label="Rodzaj imprezy"
                            fullWidth
                            variant="outlined"
                            value={formData.partyType}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    partyType: e.target.value
                                })
                            }
                        />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        {/* ZMIENIC NA JEZYK POLSKI MIESIACE  */}
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <KeyboardDatePicker
                                required
                                autoOk
                                variant="inline"
                                inputVariant="outlined"
                                label="Data imprezy"
                                format="DD/MM/yyyy"
                                value={formData.date}
                                disableToolbar
                                onChange={(date) =>
                                    setFormData({ ...formData, date: date })
                                }
                                className={classes.datePicker}
                                fullWidth
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            multiline
                            name="message"
                            label="Twoja wiadomość"
                            placeholder="Opisz jak ma wyglądać impreza"
                            fullWidth
                            rows={10}
                            variant="outlined"
                            className={classes.message}
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    message: e.target.value
                                })
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant="outlined"
                            fullWidth
                            className={classes.sendButton}
                            onClick={sendForm}
                        >
                            Wyślij
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant="outlined"
                            fullWidth
                            onClick={clearForm}
                        >
                            Wyczyść
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
}

export default Form;
