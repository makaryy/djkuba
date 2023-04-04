import React from "react";
import { useEffect, useState } from "react";

import { Grid, Grow, Box } from "@mui/material";

import OfferItem from "@/components/OfferItem";

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
    );
}

export default Offer;
