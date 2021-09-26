import React from "react";
import Antek from "../images/Antek.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import styles from "../styles";

const useStyles = makeStyles((theme) => ({
    Antek: {
        // height: "300px",
        width: "100%",
        borderRadius: "15px"
    },
    root: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    ramka: {
        backgroundColor: "#000",
        padding: "10px",
        borderRadius: "15px",
        width: "50%"
    },
    lewo: {
        width: "50%"
    }
}));

function AboutSite() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={[classes.lewo, classes.Paper]}>
                <Typography variant="h2" align="center">
                    O MNIE
                </Typography>
                <Typography variant="h4" align="center">
                    Cześć z tej strony DJ KUBA! Prowadzę imprezy od kilku lat
                    bnbbbbbybry
                </Typography>
            </Paper>
            <div className={classes.ramka}>
                <img src={Antek} alt="Antek" className={classes.Antek}></img>
            </div>
        </div>
    );
}

export default AboutSite;
