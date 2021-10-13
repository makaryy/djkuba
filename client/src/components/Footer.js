import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
    return (
        <footer
            style={{
                position: "static",
                backgroundColor: "black",
                width: "100%",
                height: "7.5vh",
                marginTop: "5vh"
            }}
        >
            <InstagramIcon sx={{ fontSize: "4.5rem" }} />
            <FacebookIcon sx={{ fontSize: "4.5rem" }} />
        </footer>
    );
}

export default Footer;
