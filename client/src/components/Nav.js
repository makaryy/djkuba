import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../theme";

// import logo from "../images/logo.png";
// import icon from "../images/icon.png";
import icon2 from "../images/icon2.png";

// MUSI PRZYJAC PARAMETR OD EKRANU + TRZEBA ZROBIC LISTE JAK MNIEJSZY EKRAN
function Nav() {
    const [value, setValue] = useState("/");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const overMd = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <AppBar
            position="absolute"
            sx={{ height: "7.5vh", justifyContent: "center" }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <img src={icon2} alt="logo" style={{ width: "50px" }}></img>

                <div>
                    {overMd ? (
                        <Tabs
                            value={value}
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
                        <IconButton>
                            <ListOutlinedIcon sx={{ fontSize: "2.5rem" }} />
                        </IconButton>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Nav;
