import React from "react";
import { useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grow from "@mui/material/Grow";

import Antek from "../images/Antek.jpg";

function About() {
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
            <Paper
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    // alignItems: "top",
                    backgroundColor: "rgba(0,0,0,.7)"
                }}
            >
                <div
                    style={{
                        padding: "30px",

                        width: "50%",
                        color: "white"
                    }}
                >
                    <Typography variant="h2" align="center">
                        O MNIE
                    </Typography>
                    <Typography variant="h4" align="center">
                        Cześć z tej strony DJ KUBA! Prowadzę imprezy od kilku
                        lat bnbbbbbybry
                    </Typography>
                </div>
                <div
                    style={{
                        padding: "30px",
                        width: "50%"
                    }}
                >
                    <img
                        src={Antek}
                        alt="Antek"
                        style={{
                            width: "100%",
                            borderRadius: "15px",
                            margin: "0 auto"
                        }}
                    ></img>
                </div>
            </Paper>
        </Grow>
    );
}

export default About;
