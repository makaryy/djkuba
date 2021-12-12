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
    IconButton,
    List,
    ListItemButton,
    ListItem
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";

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
                    <Box
                        sx={{
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
                    </Box>
                </Collapse>
                <Paper
                    id="headerText"
                    sx={{
                        backgroundColor: "rgba(0,0,0,.7)",
                        padding: "30px"
                    }}
                >
                    <Typography variant={textSize} align="center" color="white">
                        Planujesz zorganizować niezapomnianą imprezę na
                        najwyższym poziomie? Szukasz DJ'a? <br />
                        Zapraszam do współpracy.
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{ justifyContent: "center" }}
                                >
                                    <Link
                                        to="/omnie"
                                        style={{
                                            textDecoration: "none",
                                            color: "white"
                                        }}
                                    >
                                        <DoubleArrowOutlinedIcon />
                                        &nbsp;O mnie
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{ justifyContent: "center" }}
                                >
                                    <Link
                                        to="/oferta"
                                        style={{
                                            textDecoration: "none",
                                            color: "white"
                                        }}
                                    >
                                        <DoubleArrowOutlinedIcon />
                                        &nbsp; Oferta
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{ justifyContent: "center" }}
                                >
                                    <Link
                                        to="/galeria"
                                        style={{
                                            textDecoration: "none",
                                            color: "white"
                                        }}
                                    >
                                        <DoubleArrowOutlinedIcon />
                                        &nbsp; Galeria
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{ justifyContent: "center" }}
                                >
                                    <Link
                                        to="/kontakt"
                                        style={{
                                            textDecoration: "none",
                                            color: "white"
                                        }}
                                    >
                                        <DoubleArrowOutlinedIcon />
                                        &nbsp; Kontakt
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                        </List>
                        Pozdrawiam DJ KUBA.
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
}

export default Header;
