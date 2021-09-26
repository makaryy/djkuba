import React from "react";

import { Paper, Typography, useMediaQuery } from "@material-ui/core";

import theme from "../theme";
import useStyles from "../styles";

function About() {
    const classes = useStyles();

    const overSm = useMediaQuery(theme.breakpoints.up("sm"));
    const textSize = overSm ? "h4" : "h6";

    return (
        <Paper className={classes.About && classes.Paper}>
            <Typography variant={textSize} align="center">
                Planujesz zorganizować niezapomnianą imprezę na najwyższym
                poziomie? Szukasz DJ'a? Zapraszam do współpracy.
            </Typography>
            <Typography variant={textSize} align="center">
                Pozdrawiam DJ KUBA
            </Typography>
        </Paper>
    );
}

export default About;
