import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

import {
    useMediaQuery,
    Typography,
    Paper,
    Box,
    Collapse,
    IconButton
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import logo from "../images/logo.png";

import theme from "../theme";

function Header() {
    const overSm = useMediaQuery(theme.breakpoints.up("sm"));
    const textSize = overSm ? "h4" : "h6";
    const arrowSize = overSm ? "7.5rem" : "3.5rem";

    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <Box>
            <Box
                sx={{
                    minHeight: "200vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginTop: "-10vh"
                }}
            >
                <Collapse orientation="horizontal" in={animate} timeout={1000}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <img
                            src={logo}
                            alt="DJ KUBA"
                            style={{ width: "70vw" }}
                        ></img>
                        <Scroll to="headerText" smooth={true}>
                            <IconButton sx={{}}>
                                <KeyboardArrowDownIcon
                                    sx={{ fontSize: arrowSize }}
                                />
                            </IconButton>
                        </Scroll>
                    </div>
                </Collapse>
                <Paper
                    id="headerText"
                    sx={{
                        // marginTop: "100px",
                        backgroundColor: "rgba(0,0,0,.7)",
                        padding: "30px"
                    }}
                >
                    <Typography variant={textSize} align="center" color="white">
                        Planujesz zorganizować niezapomnianą imprezę na
                        najwyższym poziomie? Szukasz DJ'a? Zapraszam do
                        współpracy.
                        <br />
                        <Link to="/omnie">Tutaj</Link> kilka informacji o mnie.
                        <br />
                        <Link to="/oferta">W tym miejscu</Link> możesz sprawdzić
                        moją ofertę.
                        <br />
                        Moje fotki do obejrzenia znajdziesz{" "}
                        <Link
                            to="/galeria"
                            onClick={() => console.log("/galeria")}
                        >
                            tutaj
                        </Link>
                        .
                        <br />
                        Zakładka z możliwościa kontaktu ze mną jest{" "}
                        <Link to="kontakt">tutaj</Link>.
                        <br />
                        Pozdrawiam DJ KUBA
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
}

export default Header;
