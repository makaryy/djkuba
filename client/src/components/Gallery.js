import React from "react";
import { useEffect, useState } from "react";

import {
    Box,
    ImageList,
    ImageListItem,
    Grow,
    useMediaQuery
} from "@mui/material";
import theme from "../theme";

import { getGallery } from "../api/index";

import picture01 from "../images/gallery/picture01.jpg";
import picture02 from "../images/gallery/picture02.jpg";
import picture03 from "../images/gallery/picture03.jpg";
import picture04 from "../images/gallery/picture04.jpg";
import picture05 from "../images/gallery/picture05.jpg";
import picture06 from "../images/gallery/picture06.jpg";
import picture07 from "../images/gallery/picture07.jpg";
import picture08 from "../images/gallery/picture08.jpg";
import picture09 from "../images/gallery/picture09.jpg";
import picture10 from "../images/gallery/picture10.jpg";
import picture11 from "../images/gallery/picture11.jpg";
import picture12 from "../images/gallery/picture12.jpg";
import picture13 from "../images/gallery/picture13.jpg";
import picture14 from "../images/gallery/picture14.jpg";
import picture15 from "../images/gallery/picture15.jpg";
import picture16 from "../images/gallery/picture16.jpg";

function Gallery() {
    const gallery = [
        picture01,
        picture02,
        picture03,
        picture04,
        picture05,
        picture06,
        picture07,
        picture08,
        picture09,
        picture10,
        picture11,
        picture12,
        picture13,
        picture14,
        picture15,
        picture16
    ];

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        gallery.forEach((picture) => console.log(picture));
    }, []);

    const overMd = useMediaQuery(theme.breakpoints.up("md"));
    const colNumber = overMd ? 3 : 2;

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "80vh"
                // overflowY: "scroll"
            }}
        >
            <ImageList variant="masonry" cols={colNumber} gap={10}>
                {gallery.map((picture) => (
                    <Grow
                        key={picture}
                        in={animate}
                        style={{ transformOrigin: "0 0 0" }}
                        {...(animate ? { timeout: 1500 } : {})}
                    >
                        <ImageListItem key={picture.url}>
                            <img src={picture} alt={picture} loading="lazy" />
                        </ImageListItem>
                    </Grow>
                ))}
            </ImageList>
        </Box>
    );
}

export default Gallery;
