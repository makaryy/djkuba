import { Typography, Grow, useMediaQuery, Box } from "@mui/material";
import Image from "next/image";

import theme from "../theme";
import Head from "next/head";

const aboutSrc = "/kuba-about.jpg";

function About() {
    const overMd = useMediaQuery(theme.breakpoints.up("md"));
    const overLg = useMediaQuery(theme.breakpoints.up("lg"));
    const textSize = overMd ? "body1" : "body2";

    return (
        <>
            <Head>
                <title>O mnie - DJ Kuba</title>
                <meta
                    name="description"
                    content="Zrzeszony DJ w DJ Promotion, konferansjer oraz muzyk. Osoba, która rozrusza każde towarzystwo w każdym miejscu - Milicz, Rawicz, Leszno, Miejska Górka i nie tylko"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Box
                sx={{
                    backgroundColor: "rgba(0,0,0,.5)",
                    padding: "2rem",
                }}
            >
                <Grow in={true} {...(true ? { timeout: 1000 } : {})}>
                    {overLg ? (
                        <Box
                            sx={{
                                width: "100%",
                                background: `url('${aboutSrc}')`,
                                backgroundSize: "cover",
                                borderRadius: "6px",
                            }}
                        >
                            <Box
                                sx={{
                                    backdropFilter: "blur(1px) brightness(.5)",
                                    height: "85vh",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "end",
                                    padding: "20px",
                                    borderRadius: "6px",
                                }}
                            >
                                <Typography variant={textSize} align="justify" sx={{ fontWeight: 400 }}>
                                    <span style={{ fontSize: "2.5rem", fontWeight: 400 }}>O mnie</span>
                                    <br />
                                    Cześć. Mam na imię Kuba i jestem muzykiem oraz djem z wieloletnim doświadczeniem. Przygodę z muzyką
                                    rozpocząłem w 2010 r. Ukończyłem szkołę muzyczną 1 stopnia z wieloma osiągnięciami. Jestem zrzeszonym
                                    djem w DJ Promotion. Od wielu lat zajmuję się profesjonalnym prowadzeniem imprez okolicznościowych. Na
                                    koncie mam niezliczoną ilość eventów, wesel oraz innych uroczystości. Do każdego klienta podchodzę
                                    indywidualnie z najwyższym zaangażowaniem oraz profesjonalnym podejściem. Wybierając mnie na swoją
                                    imprezę gwarantuję Ci wyjątkową oprawę muzyczną, zadowolenie gości, niezapomniany klimat oraz
                                    niesamowitą atmosferę, którą zapamiętasz na długie lata. Niezwykle ważny jest odpowiedni dobór gatunków
                                    muzycznych do danej imprezy oraz jeszcze lepszy konferansjer, który rozkręci każde towarzystwo. Jeśli
                                    szukasz profesjonalnej osoby, która zadba o wyjątkową atmosferę na Twojej imprezie, to świetnie
                                    trafiłeś! Zapraszam do kontaktu.
                                    <br />
                                    <br />
                                    DJ KUBA
                                </Typography>
                            </Box>
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                padding: "10px",
                                borderRadius: "6px",
                                gap: "10px",
                            }}
                        >
                            <Typography variant="h3" align="center" gutterBottom>
                                O MNIE
                            </Typography>

                            <Image
                                width={900}
                                height={600}
                                src={aboutSrc}
                                alt="DJ KUBA"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "5px",
                                }}
                            ></Image>

                            <Typography variant={textSize} align="justify" sx={{ fontWeight: 400 }}>
                                Cześć. Mam na imię Kuba i jestem muzykiem oraz djem z wieloletnim doświadczeniem. Przygodę z muzyką
                                rozpocząłem w 2010 r. Ukończyłem szkołę muzyczną 1 stopnia z wieloma osiągnięciami. Jestem zrzeszonym djem w
                                DJ Promotion. Od wielu lat zajmuję się profesjonalnym prowadzeniem imprez okolicznościowych. Na koncie mam
                                niezliczoną ilość eventów, wesel oraz innych uroczystości. Do każdego klienta podchodzę indywidualnie z
                                najwyższym zaangażowaniem oraz profesjonalnym podejściem. Wybierając mnie na swoją imprezę gwarantuję Ci
                                wyjątkową oprawę muzyczną, zadowolenie gości, niezapomniany klimat oraz niesamowitą atmosferę, którą
                                zapamiętasz na długie lata. Niezwykle ważny jest odpowiedni dobór gatunków muzycznych do danej imprezy oraz
                                jeszcze lepszy konferansjer, który rozkręci każde towarzystwo. Jeśli szukasz profesjonalnej osoby, która
                                zadba o wyjątkową atmosferę na Twojej imprezie, to świetnie trafiłeś! Zapraszam do kontaktu.
                                <br />
                                <br />
                                DJ KUBA
                            </Typography>
                        </Box>
                    )}
                </Grow>
            </Box>
        </>
    );
}

export default About;
