import React from "react";
import { Typography, Card, CardMedia, CardContent } from "@material-ui/core";
import useStyles from "../styles";

function Info({ image, title }) {
    const classes = useStyles();

    return (
        <Card className={classes.Card}>
            <CardContent className={classes.CardContent}>
                <Typography variant="h5" align="center">
                    {title}
                </Typography>
            </CardContent>
            <CardMedia
                image={image}
                component="img"
                className={classes.media}
            />
        </Card>
    );
}

export default Info;
