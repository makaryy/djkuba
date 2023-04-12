import Head from "next/head";
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
        <>
            <Head>
                <title>Kontakt - DJ Kuba</title>
                <meta name="description" content="Napisz, zadzwoń, zgłoś się. Skontaktuj się, żeby poznać szczegóły twojej imprezy." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
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
        </>
    );
}

export default Contact;
