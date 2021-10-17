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

    return (
        <Grid container spacing={8} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} md={5}>
                <Grow
                    in={animate}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(animate ? { timeout: 1000 } : {})}
                >
                    <div>
                        <OfferItem title={"WESELA"} image={wesele} />
                    </div>
                </Grow>
            </Grid>
            <Grid item xs={12} md={5}>
                <Grow
                    in={animate}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(animate ? { timeout: 2000 } : {})}
                >
                    <div>
                        <OfferItem title={"OSIEMNASTKI"} image={osiemnastka} />
                    </div>
                </Grow>
            </Grid>
            <Grid item xs={12} md={5}>
                <Grow
                    in={animate}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(animate ? { timeout: 3000 } : {})}
                >
                    <div>
                        <OfferItem title={"JUBILEUSZE"} image={jubileusz} />
                    </div>
                </Grow>
            </Grid>
            <Grid item xs={12} md={5}>
                <Grow
                    in={animate}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(animate ? { timeout: 4000 } : {})}
                >
                    <div>
                        <OfferItem title={"WIECZORKI"} image={wieczorek} />
                    </div>
                </Grow>
            </Grid>
            <Grid item xs={12} md={5}>
                <Grow
                    in={animate}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(animate ? { timeout: 5000 } : {})}
                >
                    <div>
                        <OfferItem title={"IMPREZY PLENEROWE"} image={plener} />
                    </div>
                </Grow>
            </Grid>
            <Grid item xs={12} md={5}>
                <Grow
                    in={animate}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(animate ? { timeout: 6000 } : {})}
                >
                    <div>
                        <OfferItem title={"EVENTY"} image={event} />
                    </div>
                </Grow>
            </Grid>
        </Grid>
    );
}

export default Offer;
