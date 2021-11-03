import React from "react";
import { useEffect, useState } from "react";

import { Grid, Grow } from "@mui/material";

import OfferItem from "./OfferItem";

import wesele from "../images/wesele.jpg";
import event from "../images/event.jpg";
import plener from "../images/plener.jpg";
import wieczorek from "../images/wieczorek.jpg";
import osiemnastka from "../images/osiemnastka.jpg";
import jubileusz from "../images/jubileusz.jpg";

function Offer() {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, []);

    const offerItems = [
        { title: "WESELA", image: wesele, timeout: 500 },
        { title: "OSIEMNASTKI", image: osiemnastka, timeout: 1000 },
        { title: "JUBILEUSZE", image: jubileusz, timeout: 1500 },
        { title: "WIECZORKI", image: wieczorek, timeout: 2000 },
        { title: "IMPREZY PLENEROWE", image: plener, timeout: 2500 },
        { title: "EVENTY", image: event, timeout: 3000 }
    ];

    return (
        <Grid container spacing={8} sx={{ justifyContent: "center" }}>
            {offerItems.map((item) => {
                return (
                    <Grid item xs={12} md={5} key={item.title}>
                        <Grow
                            in={animate}
                            style={{ transformOrigin: "0 0 0" }}
                            {...(animate ? { timeout: item.timeout } : {})}
                        >
                            <div>
                                <OfferItem
                                    title={item.title}
                                    image={item.image}
                                />
                            </div>
                        </Grow>
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default Offer;
