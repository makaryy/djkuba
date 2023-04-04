import React, { FormEvent } from "react";
import { useState } from "react";

import { format } from "date-fns";
import plLocale from "date-fns/locale/pl";

import { Paper, Button, Grid, TextField, Alert } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { IFormData, IResponse } from "@/types";

const initialState: IFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    partyType: "",
    message: "",
    date: new Date(),
};

function Form() {
    const [formData, setFormData] = useState<IFormData>(initialState);
    const [showFormError, setShowFormError] = useState(false);
    const [showSendingSuccess, setShowSendingSuccess] = useState(false);
    const [showSendingError, setShowSendingError] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        const { firstName, lastName, email, phoneNumber, partyType, date, message } = formData;

        if (!firstName || !lastName || !email || !phoneNumber || !partyType || !date || !message) {
            setShowFormError(true);
            return;
        }
        e.preventDefault();
        try {
            const res = await fetch("/api/message", { method: "POST", body: JSON.stringify(formData) });
            const data: IResponse = await res.json();
            if (data.status === 200) {
                setShowSendingSuccess(true);
                setTimeout(() => {
                    clearForm();
                }, 2500);
                return;
            }
            setShowFormError(false);
            setShowSendingError(true);
        } catch (error) {
            setShowSendingError(true);
        }
    };

    // const sendForm = async () => {
    //     const { firstName, lastName, email, phoneNumber, partyType, date, message } = formData;

    //     if (!firstName || !lastName || !email || !phoneNumber || !partyType || !date || !message) {
    //         setShowFormError(true);
    //         return;
    //     }
    //     const mailData = {
    //         from: `${firstName} ${lastName} (tel. ${phoneNumber}) <${email}>`,
    //         to: "kontakt@djkuba.pl",
    //         subject: `${partyType} ${format(date, "dd/MM/yyyy")}`,
    //         text: `${message} `,
    //     };
    //     const response = await sendMessage(mailData);
    //     if (response.status === 200) {
    //         setShowSendingSuccess(true);
    //         return;
    //     }
    //     setShowFormError(false);
    // };

    const clearForm = () => {
        setShowFormError(false);
        setShowSendingError(false);
        setShowSendingSuccess(false);
        setFormData(initialState);
    };

    return (
        <Paper sx={{ padding: "30px", backgroundColor: "rgba(0,0,0,.4)", backdropFilter: "blur(5px)" }}>
            {showFormError && (
                <Alert severity="warning" sx={{ marginBottom: "25px" }}>
                    Musisz uzupełnić cały formularz
                </Alert>
            )}
            {showSendingSuccess && (
                <Alert severity="success" sx={{ marginBottom: "25px" }}>
                    Formularz został wysłany
                </Alert>
            )}
            {showSendingError && (
                <Alert severity="error" sx={{ marginBottom: "25px" }}>
                    Wystąpił błąd podczas wysyłania formularza, spróbuj ponownie
                </Alert>
            )}

            <form onSubmit={handleSubmit}>
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
                                    firstName: e.target.value,
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
                                    lastName: e.target.value,
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
                                    email: e.target.value,
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
                                    phoneNumber: e.target.value,
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
                                    partyType: e.target.value,
                                })
                            }
                        />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDateFns} locale={plLocale}>
                            <DatePicker
                                label="Data imprezy"
                                value={formData.date}
                                format="dd/MM/yyyy"
                                minDate={new Date()}
                                onChange={(date) => date && setFormData({ ...formData, date })}
                                sx={{ width: "100%" }}
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
                            rows={5}
                            variant="outlined"
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    message: e.target.value,
                                })
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="outlined" fullWidth color="secondary" type="submit">
                            Wyślij
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="outlined" fullWidth color="secondary" onClick={clearForm}>
                            Wyczyść
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
}

export default Form;
