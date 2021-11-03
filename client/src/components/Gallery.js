import React from "react";
import { useEffect, useState } from "react";

import { Box, ImageList, ImageListItem, Grow } from "@mui/material";

import { getGallery } from "../api/index";
import useLocalStorage from "../hooks/useLocalStorage";

function Gallery() {
    const [gallery, setGallery] = useLocalStorage("gallery", []);
    const [animate, setAnimate] = useState(false);
    // const [gallery, setGallery] = useState([]);

    const fetch = async () => {
        const result = await getGallery();
        const pictures = result.data;
        setGallery(pictures);
    };

    useEffect(() => {
        setAnimate(true);
        if (gallery.length < 2) {
            fetch();
        }
    }, []);

    return (
        <Box sx={{ width: "100%", height: "80vh", overflowY: "scroll" }}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {gallery.map((picture) => (
                    <Grow
                        in={animate}
                        style={{ transformOrigin: "0 0 0" }}
                        {...(animate ? { timeout: 1500 } : {})}
                    >
                        <ImageListItem key={picture.url}>
                            <img
                                src={picture.url}
                                alt={picture.name}
                                loading="lazy"
                            />
                        </ImageListItem>
                    </Grow>
                ))}
            </ImageList>
        </Box>
    );
}

export default Gallery;
