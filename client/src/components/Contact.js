import React from "react";
import { useEffect, useState } from "react";

import Form from "./Form";

import { Typography, Paper, Grow } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

function Contact() {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, []);
    return (
        <Grow
            orientation="horizontal"
            in={animate}
            {...(animate ? { timeout: 1000 } : {})}
        >
            <div style={{ minHeight: "80vh" }}>
                <Paper
                    sx={{
                        padding: "20px",
                        backgroundColor: "rgba(0,0,0,.7)",
                        color: "white",
                        marginBottom: "50px"
                    }}
                >
                    <Typography variant="h4" align="center" gutterBottom>
                        Zapraszam do kontaktu
                    </Typography>
                    <Typography align="center" variant="h6">
                        <PhoneIphoneIcon /> 504 005 709
                    </Typography>
                    <Typography align="center" variant="h6">
                        <EmailOutlinedIcon /> kontakt@djkuba.pl
                    </Typography>
                    <Typography align="center" variant="h6">
                        <KeyboardAltOutlinedIcon /> Możesz również zgłosić się
                        poprzez formularz poniżej
                    </Typography>
                </Paper>

                <Form />
            </div>
        </Grow>
    );
}

export default Contact;
