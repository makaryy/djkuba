import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

function Info({ image, title }) {
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

export default Info;
