import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Link, Typography, useMediaQuery } from "@mui/material";

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
                // paddingTop: "20px",
                display: "flex",
                flexDirection: componentsDirection,
                alignItems: "center",
                justifyContent: "space-around"
            }}
        >
            <Link
                underline="none"
                href="https://www.instagram.com/djkuba.official/"
                color="secondary"
            >
                <InstagramIcon sx={{ fontSize: "1rem" }} /> djkuba.official
            </Link>
            <Link
                underline="none"
                href="https://www.facebook.com/djkubamusic"
                color="secondary"
            >
                <FacebookIcon sx={{ fontSize: "1rem" }} /> djkubamusic
            </Link>
            <Typography variant="body2">
                <EmailOutlinedIcon sx={{ fontSize: "1rem" }} />{" "}
                kontakt@djkuba.pl
            </Typography>
            <Typography>
                <PhoneIphoneIcon sx={{ fontSize: "1rem" }} /> 504 005 709
            </Typography>
        </footer>
    );
}

export default Footer;
