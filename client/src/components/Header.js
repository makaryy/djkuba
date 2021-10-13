import React from "react";
import { useEffect, useState } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import logo from "../images/logo.png";

import theme from "../theme";

function Header() {
    const overSm = useMediaQuery(theme.breakpoints.up("sm"));
    const textSize = overSm ? "h4" : "h6";

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
                            style={{ width: "50vw" }}
                        ></img>
                        <IconButton sx={{}}>
                            <KeyboardArrowDownIcon
                                sx={{ fontSize: "8.5rem" }}
                            />
                        </IconButton>
                    </div>
                </Collapse>
                <Paper
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
                    </Typography>
                    <Typography variant={textSize} align="center" color="white">
                        Pozdrawiam DJ KUBA
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
}

export default Header;
