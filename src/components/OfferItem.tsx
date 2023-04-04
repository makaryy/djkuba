import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import Image from "next/image";

interface Props {
    image: string;
    title: string;
}

function OfferItem({ image, title }: Props) {
    return (
        <Card sx={{ backgroundColor: "rgba(0,0,0,.4)", backdropFilter: "blur(3px)" }}>
            <CardContent>
                <Typography variant="h5" align="center" color="white">
                    {title}
                </Typography>
            </CardContent>
            <CardMedia src={image} component="img" sx={{ borderRadius: "4px" }} />
        </Card>
    );
}

export default OfferItem;
