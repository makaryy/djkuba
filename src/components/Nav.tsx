import React, { ReactElement, SyntheticEvent } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Tabs, Tab, AppBar, Toolbar, IconButton, Menu, MenuItem, Fade, useMediaQuery, useScrollTrigger, Slide, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "@/utils/theme";

const iconSrc = "/icon2-no-bg.png";

interface HideOnScrollProps {
    children: ReactElement<any, any>;
}

function HideOnScroll({ children }: HideOnScrollProps) {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function Nav() {
    const [value, setValue] = useState("/");

    const { pathname, push } = useRouter();
    const galleryRegex = /^\/galeria\/\[id\]$/;
    const display = galleryRegex.test(pathname) ? "none" : "flex";

    // FIX THAT
    useEffect(() => {
        valueChecker();
    }, [pathname, value]);

    const handleChange = (event: SyntheticEvent<Element, Event>, newValue: string) => {
        setValue(newValue);
    };

    const valueChecker = () => {
        if (value !== pathname) {
            setValue(pathname);
        }
    };

    const overMd = useMediaQuery(theme.breakpoints.up("md"));

    const [anchorEl, setAnchorEl] = useState<Element | null>(null);
    const open = !!anchorEl;
    const handleClick = (event: React.MouseEvent) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (pageURL: string) => {
        push(pageURL);
        setAnchorEl(null);
    };

    const galleryChecker = /galeria/;

    return (
        // <HideOnScroll>
        <AppBar position="static" sx={{ display, justifyContent: "center" }}>
            <Toolbar
                sx={{
                    justifyContent: "space-between",
                    backgroundColor: "black",
                }}
            >
                <Image src={iconSrc} priority alt="DJ KUBA logo" width={50} height={50} />

                <Box>
                    {overMd ? (
                        <Tabs
                            value={galleryChecker.test(value) ? "/galeria" : value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                        >
                            <Tab
                                label="Strona Główna"
                                value="/"
                                component={Link}
                                href="/"
                                sx={{
                                    ":hover": {
                                        color: "white",
                                        opacity: "100",
                                    },
                                }}
                            />

                            <Tab
                                label="O mnie"
                                value="/omnie"
                                component={Link}
                                href="/omnie"
                                sx={{
                                    ":hover": {
                                        color: "white",
                                        opacity: "100",
                                    },
                                }}
                            />

                            <Tab
                                label="Oferta"
                                value="/oferta"
                                component={Link}
                                href="/oferta"
                                sx={{
                                    ":hover": {
                                        color: "white",
                                        opacity: "100",
                                    },
                                }}
                            />

                            <Tab
                                label="Galeria"
                                value="/galeria"
                                component={Link}
                                href="/galeria"
                                sx={{
                                    ":hover": {
                                        color: "white",
                                        opacity: "100",
                                    },
                                }}
                            />

                            <Tab
                                label="Kontakt"
                                value="/kontakt"
                                component={Link}
                                href="/kontakt"
                                sx={{
                                    ":hover": {
                                        color: "white",
                                        opacity: "100",
                                    },
                                }}
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
                                        backgroundColor: "black",
                                    },
                                }}
                                sx={{
                                    width: "100vw",
                                }}
                            >
                                <MenuItem onClick={() => handleMenuClick("/")}>Strona Główna</MenuItem>
                                <MenuItem onClick={() => handleMenuClick("/omnie")}>O mnie</MenuItem>
                                <MenuItem onClick={() => handleMenuClick("/oferta")}>Oferta</MenuItem>
                                <MenuItem onClick={() => handleMenuClick("/galeria")}>Galeria</MenuItem>
                                <MenuItem onClick={() => handleMenuClick("/kontakt")}>Kontakt</MenuItem>
                            </Menu>
                        </Box>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
        // </HideOnScroll>
    );
}

export default Nav;
