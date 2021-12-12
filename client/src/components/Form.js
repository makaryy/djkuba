import React from "react";
import { useState } from "react";

import { format } from "date-fns";
import plLocale from "date-fns/locale/pl";

import { Paper, Button, Grid, TextField, Alert } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import { sendMessage } from "../api/index";

function Form() {
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
                to: "kontakt@djkuba.pl",
                subject: `${partyType} ${format(date, "dd/MM/yyyy")}`,
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
        <Paper sx={{ padding: "30px", backgroundColor: "rgba(0,0,0,.7)" }}>
            {alert ? (
                <Alert severity="error" sx={{ marginBottom: "25px" }}>
                    Musisz uzupełnić cały formularz
                </Alert>
            ) : formSent ? (
                <Alert severity="success" sx={{ marginBottom: "25px" }}>
                    Formularz został wysłany
                </Alert>
            ) : null}

            <form>
                <Grid container alignItems="center" spacing={3}>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            required
                            color="secondary"
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
                            color="secondary"
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
                            color="secondary"
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
                            color="secondary"
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
                            color="secondary"
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
                        <LocalizationProvider
                            dateAdapter={AdapterDateFns}
                            locale={plLocale}
                        >
                            <DatePicker
                                label="Data imprezy"
                                value={formData.date}
                                inputFormat="dd/MM/yyyy"
                                minDate={new Date()}
                                onChange={(date) =>
                                    setFormData({ ...formData, date: date })
                                }
                                renderInput={(params) => (
                                    <TextField
                                        color="secondary"
                                        {...params}
                                        fullWidth
                                    />
                                )}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            color="secondary"
                            multiline
                            name="message"
                            label="Twoja wiadomość"
                            placeholder="Opisz jak ma wyglądać impreza"
                            fullWidth
                            rows={7}
                            variant="outlined"
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
                            color="secondary"
                            onClick={sendForm}
                        >
                            Wyślij
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant="outlined"
                            fullWidth
                            color="secondary"
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
