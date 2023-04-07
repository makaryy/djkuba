import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import theme from "@/theme";
import { useMediaQuery, Box, Collapse, IconButton, Paper, Typography } from "@mui/material";
import { KeyboardArrowDown, BadgeOutlined, AlternateEmailOutlined, CollectionsOutlined, DescriptionOutlined } from "@mui/icons-material/";

const logoSrc = "/logo.png";

export default function Home() {
    const overSm = useMediaQuery(theme.breakpoints.up("sm"));
    const textSize = overSm ? "h5" : "body1";
    const arrowSize = overSm ? "7.5rem" : "3.5rem";

    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, []);
    return (
        <>
            <Head>
                <title>DJ KUBA - Imprezy, Wesela, Jubileusze</title>
                <meta
                    name="description"
                    content="Doświadczony muzyk oraz DJ. Milicz, Rawicz, Miejska Górka, Leszno oraz wszędzie tam, gdzie potrzebujesz. Wesela, osiemnastki, jubileusze itd."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Box
                sx={{
                    height: "200vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "stretch",
                    padding: "30px",
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "50vh",
                    }}
                >
                    <Collapse orientation="horizontal" in={animate} timeout={1000}>
                        <Image
                            src={logoSrc}
                            alt="DJ KUBA"
                            width={1200}
                            height={450}
                            priority
                            style={{
                                width: overSm ? "70vw" : "100vw",
                                height: "auto",
                            }}
                        ></Image>
                    </Collapse>
                    <Scroll to="headerText" smooth={true}>
                        <IconButton sx={{}}>
                            <KeyboardArrowDown
                                sx={{
                                    fontSize: arrowSize,
                                }}
                            />
                        </IconButton>
                    </Scroll>
                </Box>
                <Paper
                    id="headerText"
                    sx={{
                        backgroundColor: "rgba(0,0,0,.8)",
                        backdropFilter: "blur(5px)",
                        padding: "30px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Typography variant={textSize} align="center" color="white">
                        Planujesz zorganizować niezapomnianą imprezę na najwyższym poziomie? Szukasz DJ&apos;a? <br />
                        Zapraszam do współpracy.
                    </Typography>
                    <Box
                        sx={{
                            display: "grid",
                            justifyContent: "center",
                            alignItems: "center",
                            gridTemplateColumns: "1fr 1fr",
                            rowGap: "2rem",
                            margin: "30px",
                            gap: "1.5rem",
                        }}
                    >
                        <Link
                            href="/omnie"
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            <Paper
                                elevation={7}
                                sx={{
                                    background: "rgba(255,255,255,0.1)",
                                    textAlign: "center",
                                    padding: "1.5rem",
                                    ":hover": {
                                        background: "rgba(255,255,255,0.2)",
                                    },
                                }}
                            >
                                <BadgeOutlined sx={{ fontSize: "3.5rem" }} />
                                <br /> O mnie
                            </Paper>
                        </Link>
                        <Link
                            href="/oferta"
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            <Paper
                                elevation={7}
                                sx={{
                                    background: "rgba(255,255,255,0.1)",
                                    textAlign: "center",
                                    padding: "1.5rem",
                                    ":hover": {
                                        background: "rgba(255,255,255,0.2)",
                                    },
                                }}
                            >
                                <DescriptionOutlined sx={{ fontSize: "3.5rem" }} />
                                <br /> Oferta
                            </Paper>
                        </Link>

                        <Link
                            href="/galeria"
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            <Paper
                                elevation={7}
                                sx={{
                                    background: "rgba(255,255,255,0.1)",
                                    textAlign: "center",
                                    padding: "1.5rem",
                                    ":hover": {
                                        background: "rgba(255,255,255,0.2)",
                                    },
                                }}
                            >
                                <CollectionsOutlined sx={{ fontSize: "3.5rem" }} />
                                <br /> Galeria
                            </Paper>
                        </Link>

                        <Link
                            href="/kontakt"
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            <Paper
                                elevation={7}
                                sx={{
                                    background: "rgba(255,255,255,0.1)",
                                    textAlign: "center",
                                    padding: "1.5rem",
                                    ":hover": {
                                        background: "rgba(255,255,255,0.2)",
                                    },
                                }}
                            >
                                <AlternateEmailOutlined sx={{ fontSize: "3.5rem" }} />
                                <br /> Kontakt
                            </Paper>
                        </Link>
                    </Box>
                    <Typography variant={textSize} align="center" color="white">
                        Pozdrawiam DJ KUBA
                    </Typography>
                </Paper>
            </Box>
        </>
    );
}
