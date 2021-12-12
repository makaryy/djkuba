import React from "react";
import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import {
    Tabs,
    Tab,
    AppBar,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
    Fade,
    useMediaQuery,
    useScrollTrigger,
    Slide,
    Box
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import theme from "../theme";

import icon2 from "../images/icon2.png";

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function Nav({ history }) {
    const [value, setValue] = useState("/");

    useEffect(() => {
        valueChecker();
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const valueChecker = () => {
        if (value !== history.location.pathname) {
            setValue(history.location.pathname);
        }
    };

    const overMd = useMediaQuery(theme.breakpoints.up("md"));

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (pageURL) => {
        history.push(pageURL);
        setAnchorEl(null);
    };

    const galleryChecker = /galeria/;

    return (
        <HideOnScroll>
            <AppBar
                position="fixed"
                sx={{ minHeight: "7.5vh", justifyContent: "center" }}
            >
                <Toolbar
                    sx={{
                        justifyContent: "space-between"
                    }}
                >
                    <img src={icon2} alt="logo" style={{ width: "50px" }}></img>

                    <Box>
                        {overMd ? (
                            <Tabs
                                value={
                                    galleryChecker.test(value)
                                        ? "/galeria"
                                        : value
                                }
                                onChange={handleChange}
                                indicatorColor="secondary"
                                textColor="inherit"
                            >
                                <Tab
                                    label="Strona Główna"
                                    value="/"
                                    component={Link}
                                    to="/"
                                />

                                <Tab
                                    label="O mnie"
                                    value="/omnie"
                                    component={Link}
                                    to="/omnie"
                                />

                                <Tab
                                    label="Oferta"
                                    value="/oferta"
                                    component={Link}
                                    to="/oferta"
                                />

                                <Tab
                                    label="Galeria"
                                    value="/galeria"
                                    component={Link}
                                    to="/galeria"
                                />

                                <Tab
                                    label="Kontakt"
                                    value="/kontakt"
                                    component={Link}
                                    to="/kontakt"
                                />
                            </Tabs>
                        ) : (
                            <Box>
                                <IconButton onClick={handleClick}>
                                    <MenuIcon sx={{ fontSize: "2.5rem" }} />
                                </IconButton>

                                <Menu
                                    id="fade-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleMenuClick}
                                    TransitionComponent={Fade}
                                    MenuListProps={{
                                        disablePadding: true,
                                        sx: {
                                            width: "100vw",
                                            backgroundColor: "black"
                                        }
                                    }}
                                    sx={{
                                        width: "100vw"
                                    }}
                                >
                                    <MenuItem
                                        onClick={() => handleMenuClick("/")}
                                    >
                                        Strona Główna
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() =>
                                            handleMenuClick("/omnie")
                                        }
                                    >
                                        O mnie
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() =>
                                            handleMenuClick("/oferta")
                                        }
                                    >
                                        Oferta
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() =>
                                            handleMenuClick("/galeria")
                                        }
                                    >
                                        Galeria
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() =>
                                            handleMenuClick("/kontakt")
                                        }
                                    >
                                        Kontakt
                                    </MenuItem>
                                </Menu>
                            </Box>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
}

export default withRouter(Nav);
