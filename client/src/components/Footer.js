import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Box, Link, useMediaQuery } from "@mui/material";

import theme from "../theme";

function Footer() {
    const overMd = useMediaQuery(theme.breakpoints.up("md"));
    const componentsDirection = overMd ? "row" : "column";

    return (
        <footer
            style={{
                position: "static",
                backgroundColor: "black",
                width: "100%",
                minHeight: "7.5vh",
                marginTop: "2.5vh",
                display: "flex",
                flexDirection: componentsDirection,
                alignItems: "center",
                justifyContent: "space-around",
                fontFamily: "Roboto",
                fontSize: "1.25rem"
            }}
        >
            <Link
                underline="none"
                href="https://www.instagram.com/djkuba.official/"
                color="secondary"
            >
                <InstagramIcon /> djkuba.official
            </Link>
            <Link
                underline="none"
                href="https://www.facebook.com/djkubamusic"
                color="secondary"
            >
                <FacebookIcon /> djkubamusic
            </Link>
            <Box>
                <EmailOutlinedIcon /> kontakt@djkuba.pl
            </Box>
            <Box>
                <PhoneIphoneIcon /> 504 005 709
            </Box>
        </footer>
    );
}

export default Footer;
