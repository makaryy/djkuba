import React from "react";

import { Typography, Card, CardMedia, CardContent } from "@mui/material";

function OfferItem({ image, title }) {
    return (
        <Card sx={{ backgroundColor: "rgba(0,0,0,.7)" }}>
            <CardContent>
                <Typography variant="h5" align="center" color="white">
                    {title}
                </Typography>
            </CardContent>
            <CardMedia
                image={image}
                component="img"
                sx={{ borderRadius: "4px" }}
            />
        </Card>
    );
}

export default OfferItem;
