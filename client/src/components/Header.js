import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

import { useMediaQuery, Typography, Paper, Box, Collapse, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";

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
                }}
            >
                <Collapse orientation="horizontal" in={animate} timeout={1000}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <img
                            src={logo}
                            alt="DJ KUBA"
                            style={{
                                width: "70vw",
                            }}
                        ></img>
                        <Scroll to="headerText" smooth={true}>
                            <IconButton sx={{}}>
                                <KeyboardArrowDownIcon
                                    sx={{
                                        fontSize: arrowSize,
                                    }}
                                />
                            </IconButton>
                        </Scroll>
                    </Box>
                </Collapse>
                <Paper
                    id="headerText"
                    sx={{
                        backgroundColor: "rgba(0,0,0,.7)",
                        padding: "30px",
                    }}
                >
                    <Typography variant={textSize} align="center" color="white">
                        Planujesz zorganizować niezapomnianą imprezę na najwyższym poziomie? Szukasz
                        DJ'a? <br />
                        Zapraszam do współpracy.
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                alignItems: "center",
                                rowGap: "2rem",
                                columnGap: "5%",
                                marginTop: "3rem",
                                marginBottom: "3rem",
                            }}
                        >
                            <Link
                                to="/omnie"
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                    width: "47.5%",
                                }}
                            >
                                <Paper
                                    elevation={7}
                                    sx={{
                                        background: "rgba(255,255,255,0.1)",
                                        width: "100%",
                                        padding: "5%",
                                        ":hover": {
                                            background: "rgba(255,255,255,0.2)",
                                        },
                                    }}
                                >
                                    <BadgeOutlinedIcon sx={{ fontSize: "4.5rem" }} />
                                    <br /> O mnie
                                </Paper>
                            </Link>
                            <Link
                                to="/oferta"
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                    width: "47.5%",
                                }}
                            >
                                <Paper
                                    elevation={7}
                                    sx={{
                                        background: "rgba(255,255,255,0.1)",
                                        width: "100%",
                                        padding: "5%",
                                        ":hover": {
                                            background: "rgba(255,255,255,0.2)",
                                        },
                                    }}
                                >
                                    <DescriptionOutlinedIcon sx={{ fontSize: "4.5rem" }} />
                                    <br /> Oferta
                                </Paper>
                            </Link>

                            <Link
                                to="/galeria"
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                    width: "47.5%",
                                }}
                            >
                                <Paper
                                    elevation={7}
                                    sx={{
                                        background: "rgba(255,255,255,0.1)",
                                        width: "100%",
                                        padding: "5%",
                                        ":hover": {
                                            background: "rgba(255,255,255,0.2)",
                                        },
                                    }}
                                >
                                    <CollectionsOutlinedIcon sx={{ fontSize: "4.5rem" }} />
                                    <br /> Galeria
                                </Paper>
                            </Link>

                            <Link
                                to="/kontakt"
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                    width: "47.5%",
                                }}
                            >
                                <Paper
                                    elevation={7}
                                    sx={{
                                        background: "rgba(255,255,255,0.1)",
                                        width: "100%",
                                        padding: "5%",
                                        ":hover": {
                                            background: "rgba(255,255,255,0.2)",
                                        },
                                    }}
                                >
                                    <AlternateEmailOutlinedIcon sx={{ fontSize: "4.5rem" }} />
                                    <br /> Kontakt
                                </Paper>
                            </Link>
                        </Box>
                        Pozdrawiam DJ KUBA.
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
}

export default Header;
