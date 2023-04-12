import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Box, Link as MuiLink, useMediaQuery } from "@mui/material";

import theme from "../utils/theme";
import { useRouter } from "next/router";

function Footer() {
    const overMd = useMediaQuery(theme.breakpoints.up("md"));
    const componentsDirection = overMd ? "row" : "column";

    const { pathname } = useRouter();
    const galleryRegex = /^\/galeria\/\[id\]$/;
    const display = galleryRegex.test(pathname) ? "none" : "flex";

    return (
        <footer
            style={{
                position: "static",
                backgroundColor: "black",
                width: "100%",
                display,
                flexDirection: componentsDirection,
                alignItems: "center",
                justifyContent: "space-around",
                fontFamily: "Roboto",
                fontSize: "1.25rem",
                color: "white",
                padding: "1rem",
            }}
        >
            <MuiLink underline="none" href="https://www.instagram.com/djkuba.official/" color="secondary">
                <InstagramIcon /> djkuba.official
            </MuiLink>
            <MuiLink underline="none" href="https://www.facebook.com/djkubamusic" color="secondary">
                <FacebookIcon /> djkubamusic
            </MuiLink>
            <Link href="/kontakt" style={{ color: "white", textDecoration: "none" }}>
                <EmailOutlinedIcon /> kontakt@djkuba.pl
            </Link>
            <Box>
                <PhoneIphoneIcon /> 504 005 709
            </Box>
        </footer>
    );
}

export default Footer;
