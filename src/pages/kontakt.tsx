import { useEffect, useState } from "react";

import Form from "@/components/Form";

import { Typography, Paper, Grow, Box } from "@mui/material";
import { EmailOutlined, KeyboardAltOutlined, PhoneIphone } from "@mui/icons-material/";

function Contact() {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, []);
    return (
        <Box
            sx={{
                padding: "30px",
                minHeight: "85vh",
                backgroundColor: "rgba(0,0,0,.5)",
            }}
        >
            <Grow in={animate} {...(animate ? { timeout: 1000 } : {})}>
                <Box sx={{ minHeight: "85vh", padding: "30px", display: "flex", flexDirection: "column" }}>
                    <Paper
                        sx={{
                            padding: "20px",
                            backgroundColor: "rgba(0,0,0,.4)",
                            backdropFilter: "blur(5px)",
                            color: "white",
                            marginBottom: "50px",
                        }}
                    >
                        <Typography variant="h4" align="center" gutterBottom>
                            Zapraszam do kontaktu
                        </Typography>
                        <Typography align="center" variant="h6">
                            <PhoneIphone /> 504 005 709
                        </Typography>
                        <Typography align="center" variant="h6">
                            <EmailOutlined /> kontakt@djkuba.pl
                        </Typography>
                        <Typography align="center" variant="h6">
                            <KeyboardAltOutlined /> Możesz również zgłosić się poprzez formularz poniżej
                        </Typography>
                    </Paper>

                    <Form />
                </Box>
            </Grow>
        </Box>
    );
}

export default Contact;
