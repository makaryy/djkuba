import React from "react";
import { useEffect, useState } from "react";

import { Typography, Paper, Grow, useMediaQuery } from "@mui/material";

import theme from "../theme";

import Antek from "../images/Antek.jpg";

function About() {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, []);

    const overMd = useMediaQuery(theme.breakpoints.up("md"));
    const componentsDirection = overMd ? "row" : "column";
    const componentsWidth = overMd ? "50%" : "100%";
    const textSize = overMd ? "h5" : "body1";

    return (
        <Grow
            orientation="horizontal"
            in={animate}
            {...(animate ? { timeout: 1000 } : {})}
        >
            <Paper
                sx={{
                    display: "flex",
                    flexDirection: componentsDirection,
                    backgroundColor: "rgba(0,0,0,.7)",
                    minHeight: "80vh",
                    overflow: "hidden",
                    alignItems: "center"
                }}
            >
                <div
                    style={{
                        padding: "30px",
                        width: componentsWidth,
                        color: "white"
                    }}
                >
                    <Typography variant="h2" align="center" gutterBottom>
                        O MNIE
                    </Typography>
                    <Typography variant={textSize} align="center">
                        Cześć. Mam na imię Kuba i chciałbym krótko opowiedzieć o
                        tym kim jestem i co sprawia mi w życiu najwięcej
                        radości. Jestem muzykiem oraz djem z wieloletnim
                        doświadczeniem. Przygodę z muzyką rozpocząłem w 2010 r.
                        na instrumentach klawiszowych. Ukończyłem szkołę 1
                        stopnia w wieloma osiągnięciami. Od 2016 roku zajmuję
                        się dj'ką. Na koncie mam wiele imprez (eventy, imprezy
                        okolicznościowe, imprezy plenerowe). Jestem zrzeszonym
                        djem w DJ Promotion. Każde wesele, impreza
                        okolicznościowa czy firmowa jest szczególna, dlatego
                        wymaga równie wyjątkowej oprawy. Jedną z
                        najistotniejszych kwestii takich wydarzeń gwarantującą
                        dobrą zabawę i zadowolenie gości, jest dobra muzyka i
                        jeszcze lepszy konferansjer, który rozkręci każde
                        towarzystwo. Jeśli szukasz profesjonalnej osoby, która
                        zadba o wyjątkową atmosferę na Twojej imprezie, to
                        świetnie trafiłeś!
                    </Typography>
                </div>
                <div
                    style={{
                        width: componentsWidth,
                        maxHeight: "80vh"
                    }}
                >
                    <img
                        src={Antek}
                        alt="Antek"
                        style={{
                            width: "100%",
                            borderRadius: "5px",
                            objectFit: "contain"
                        }}
                    ></img>
                </div>
            </Paper>
        </Grow>
    );
}

export default About;
