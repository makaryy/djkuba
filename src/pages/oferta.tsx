import Head from "next/head";
import { useEffect, useState } from "react";
import OfferItem from "@/components/OfferItem";
import { Grid, Grow, Box } from "@mui/material";

const weseleSrc = "/wesele.jpg";
const eventSrc = "/event.jpg";
const plenerSrc = "/plener.jpg";
const wieczorekSrc = "/wieczorek.jpg";
const osiemnastkaSrc = "/osiemnastka.jpg";
const jubileuszSrc = "/jubileusz.jpg";

function Offer() {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, []);

    const offerItems = [
        { title: "WESELA", image: weseleSrc, timeout: 500 },
        { title: "OSIEMNASTKI", image: osiemnastkaSrc, timeout: 1000 },
        { title: "JUBILEUSZE", image: jubileuszSrc, timeout: 1500 },
        { title: "WIECZORKI", image: wieczorekSrc, timeout: 2000 },
        { title: "IMPREZY PLENEROWE", image: plenerSrc, timeout: 2500 },
        { title: "EVENTY", image: eventSrc, timeout: 3000 },
    ];

    return (
        <>
            <Head>
                <title>Oferta - DJ Kuba</title>
                <meta
                    name="description"
                    content="Zobacz ofertę: wesele, osiemnastka, jubileusz, plener, event, wieczorek i wszystko co zechcesz."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Box
                sx={{
                    padding: "30px",
                    minHeight: "85vh",
                    backgroundColor: "rgba(0,0,0,.5)",
                }}
            >
                <Grid container spacing={8} sx={{ justifyContent: "center", padding: "30px" }}>
                    {offerItems.map((item) => {
                        return (
                            <Grid item xs={12} md={5} key={item.title}>
                                <Grow in={animate} style={{ transformOrigin: "0 0 0" }} {...(animate ? { timeout: item.timeout } : {})}>
                                    <div>
                                        <OfferItem title={item.title} image={item.image} />
                                    </div>
                                </Grow>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </>
    );
}

export default Offer;
