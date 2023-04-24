import Head from "next/head";
import Image from "next/image";
import theme from "../utils/theme";
import { Typography, Grow, useMediaQuery, Box } from "@mui/material";

const aboutSrc1 = "/djkuba-about01.webp";
const aboutSrc2 = "/djkuba-about02.webp";

function About() {
    const overSm = useMediaQuery(theme.breakpoints.up("sm"));
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
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "stretch",
                    padding: "30px",
                    background: "rgba(0,0,0,.5)",
                }}
            >
                <Grow in={true} timeout={1000}>
                    {overMd ? (
                        <>
                            <Typography variant="h1" sx={{ fontSize: "1.5rem" }} align="center">
                                O MNIE
                            </Typography>
                            <Box
                                sx={{
                                    position: "relative",
                                    margin: "1rem",
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "stretch",
                                    background: "linear-gradient(90deg, #60F451, #00E083, #00C7B1, #00ACD4, #008FE5, #006EDF)",
                                    padding: "1rem",
                                    borderRadius: "1rem",
                                    height: "600px",
                                    flexGrow: 1,
                                }}
                            >
                                <span
                                    style={{
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        width: "100%",
                                        height: "100%",
                                        filter: "blur(15px)",
                                        background: "linear-gradient(90deg, #60F451, #00E083, #00C7B1, #00ACD4, #008FE5, #006EDF)",
                                        zIndex: 1,
                                    }}
                                ></span>
                                <Image
                                    src={aboutSrc1}
                                    width={1440}
                                    height={2016}
                                    alt="O DJ KUBA - zdjęcie 1"
                                    style={{ width: "auto", height: "100%", borderRadius: " 1rem 0 0 1rem", zIndex: 2 }}
                                ></Image>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        alignItems: "center",
                                        flexGrow: 1,
                                        background: "linear-gradient(150deg, #101010, #030303 80%)",
                                        padding: "2rem",
                                        borderRadius: "0 1rem 1rem 0",
                                        zIndex: 2,
                                    }}
                                >
                                    <Typography sx={{ width: "400px", zIndex: 2 }} align={"right"}>
                                        Cześć. Mam na imię Kuba i jestem muzykiem oraz djem z wieloletnim doświadczeniem. Przygodę z muzyką
                                        rozpocząłem w 2010 r. Ukończyłem szkołę muzyczną 1 stopnia z wieloma osiągnięciami. Jestem
                                        zrzeszonym djem w DJ Promotion. Od wielu lat zajmuję się profesjonalnym prowadzeniem imprez
                                        okolicznościowych. Na koncie mam niezliczoną ilość eventów, wesel oraz innych uroczystości.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    position: "relative",
                                    margin: "1rem",
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "stretch",
                                    background: "linear-gradient(90deg, #845EC2, #D65DB1, #FF6F91, #FF9671, #FFC75F, #F9F871)",
                                    padding: "1rem",
                                    height: "600px",
                                    borderRadius: "1rem",
                                    flexGrow: 1,
                                }}
                            >
                                <span
                                    style={{
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        width: "100%",
                                        height: "100%",
                                        filter: "blur(15px)",
                                        background: "linear-gradient(90deg, #845EC2, #D65DB1, #FF6F91, #FF9671, #FFC75F, #F9F871)",
                                        zIndex: 1,
                                    }}
                                ></span>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        flexGrow: 1,
                                        background: "linear-gradient(150deg, #101010, #030303 80%)",
                                        padding: "2rem",
                                        borderRadius: " 1rem 0 0 1rem",
                                        zIndex: 2,
                                    }}
                                >
                                    <Typography sx={{ width: "400px", zIndex: 2 }} align={"left"}>
                                        Do każdego klienta podchodzę indywidualnie z najwyższym zaangażowaniem oraz profesjonalnym
                                        podejściem. Wybierając mnie na swoją imprezę gwarantuję Ci wyjątkową oprawę muzyczną, zadowolenie
                                        gości, niezapomniany klimat oraz niesamowitą atmosferę, którą zapamiętasz na długie lata. Niezwykle
                                        ważny jest odpowiedni dobór gatunków muzycznych do danej imprezy oraz jeszcze lepszy konferansjer,
                                        który rozkręci każde towarzystwo. Jeśli szukasz profesjonalnej osoby, która zadba o wyjątkową
                                        atmosferę na Twojej imprezie, to świetnie trafiłeś! Zapraszam do kontaktu.
                                    </Typography>
                                </Box>
                                <Image
                                    src={aboutSrc2}
                                    width={1440}
                                    height={2016}
                                    alt="O DJ KUBA - zdjęcie 1"
                                    style={{ width: "auto", height: "100%", borderRadius: "0 1rem 1rem 0", zIndex: 2 }}
                                />
                            </Box>
                        </>
                    ) : (
                        <>
                            <Typography variant="h1" sx={{ fontSize: "1.5rem" }} align="center">
                                O MNIE
                            </Typography>
                            <Box
                                sx={{
                                    position: "relative",
                                    margin: "1rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "stretch",
                                    background: "linear-gradient(90deg, #60F451, #00E083, #00C7B1, #00ACD4, #008FE5, #006EDF)",
                                    padding: ".5rem",
                                    borderRadius: ".5rem",
                                    height: "auto",
                                    zIndex: 2,
                                }}
                            >
                                <span
                                    style={{
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        width: "100%",
                                        height: "100%",
                                        filter: "blur(15px)",
                                        background: "linear-gradient(90deg, #60F451, #00E083, #00C7B1, #00ACD4, #008FE5, #006EDF)",
                                        zIndex: 1,
                                    }}
                                ></span>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexGrow: 1,
                                        background: "#060606",
                                        padding: "1rem",
                                        borderRadius: ".5rem .5rem 0 0 ",
                                        zIndex: 2,
                                    }}
                                >
                                    <Typography sx={{ width: "400px" }} align={"center"}>
                                        Cześć. Mam na imię Kuba i jestem muzykiem oraz djem z wieloletnim doświadczeniem. Przygodę z muzyką
                                        rozpocząłem w 2010 r. Ukończyłem szkołę muzyczną 1 stopnia z wieloma osiągnięciami. Jestem
                                        zrzeszonym djem w DJ Promotion. Od wielu lat zajmuję się profesjonalnym prowadzeniem imprez
                                        okolicznościowych. Na koncie mam niezliczoną ilość eventów, wesel oraz innych uroczystości.
                                    </Typography>
                                </Box>
                                <Image
                                    src={aboutSrc1}
                                    width={1440}
                                    height={2016}
                                    alt="O DJ KUBA - zdjęcie 1"
                                    style={{ width: "100%", height: "auto", zIndex: 2 }}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexGrow: 1,
                                        background: "#060606",
                                        padding: "1rem",
                                        borderRadius: "0 0 .5rem .5rem",
                                        zIndex: 2,
                                    }}
                                >
                                    <Typography sx={{ width: "400px" }} align={"center"}>
                                        Do każdego klienta podchodzę indywidualnie z najwyższym zaangażowaniem oraz profesjonalnym
                                        podejściem. Wybierając mnie na swoją imprezę gwarantuję Ci wyjątkową oprawę muzyczną, zadowolenie
                                        gości, niezapomniany klimat oraz niesamowitą atmosferę, którą zapamiętasz na długie lata. Niezwykle
                                        ważny jest odpowiedni dobór gatunków muzycznych do danej imprezy oraz jeszcze lepszy konferansjer,
                                        który rozkręci każde towarzystwo. Jeśli szukasz profesjonalnej osoby, która zadba o wyjątkową
                                        atmosferę na Twojej imprezie, to świetnie trafiłeś! Zapraszam do kontaktu.
                                    </Typography>
                                </Box>
                            </Box>
                        </>
                    )}
                </Grow>
            </Box>
        </>
    );
}

export default About;
