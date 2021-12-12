import React from "react";
import { useEffect, useState } from "react";
import {
    Link,
    useRouteMatch,
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import {
    Box,
    ImageList,
    ImageListItem,
    Grow,
    useMediaQuery
} from "@mui/material";
import theme from "../theme";

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
import fullscreenPicture01 from "../images/gallery/fs-picture01.jpg";
import fullscreenPicture02 from "../images/gallery/fs-picture02.jpg";
import fullscreenPicture03 from "../images/gallery/fs-picture03.jpg";
import fullscreenPicture04 from "../images/gallery/fs-picture04.jpg";
import fullscreenPicture05 from "../images/gallery/fs-picture05.jpg";
import fullscreenPicture06 from "../images/gallery/fs-picture06.jpg";
import fullscreenPicture07 from "../images/gallery/fs-picture07.jpg";
import fullscreenPicture08 from "../images/gallery/fs-picture08.jpg";
import fullscreenPicture09 from "../images/gallery/fs-picture09.jpg";
import fullscreenPicture10 from "../images/gallery/fs-picture10.jpg";
import fullscreenPicture11 from "../images/gallery/fs-picture11.jpg";
import fullscreenPicture12 from "../images/gallery/fs-picture12.jpg";
import fullscreenPicture13 from "../images/gallery/fs-picture13.jpg";
import fullscreenPicture14 from "../images/gallery/fs-picture14.jpg";
import fullscreenPicture15 from "../images/gallery/fs-picture15.jpg";
import fullscreenPicture16 from "../images/gallery/fs-picture16.jpg";
import Picture from "./Picture";

function Gallery({ history }) {
    const gallery = [
        { name: "picture01", src1: picture01, src2: fullscreenPicture01 },
        { name: "picture02", src1: picture02, src2: fullscreenPicture02 },
        { name: "picture03", src1: picture03, src2: fullscreenPicture03 },
        { name: "picture04", src1: picture04, src2: fullscreenPicture04 },
        { name: "picture05", src1: picture05, src2: fullscreenPicture05 },
        { name: "picture06", src1: picture06, src2: fullscreenPicture06 },
        { name: "picture07", src1: picture07, src2: fullscreenPicture07 },
        { name: "picture08", src1: picture08, src2: fullscreenPicture08 },
        { name: "picture09", src1: picture09, src2: fullscreenPicture09 },
        { name: "picture10", src1: picture10, src2: fullscreenPicture10 },
        { name: "picture11", src1: picture11, src2: fullscreenPicture11 },
        { name: "picture12", src1: picture12, src2: fullscreenPicture12 },
        { name: "picture13", src1: picture13, src2: fullscreenPicture13 },
        { name: "picture14", src1: picture14, src2: fullscreenPicture14 },
        { name: "picture15", src1: picture15, src2: fullscreenPicture15 },
        { name: "picture16", src1: picture16, src2: fullscreenPicture16 }
    ];

    const [animate, setAnimate] = useState(false);
    const [chosenPicture, setChosenPicture] = useState(null);

    useEffect(() => {
        setAnimate(true);
    }, []);

    useEffect(() => {
        if (chosenPicture) history.push(`/galeria/${chosenPicture.name}`);
    }, [chosenPicture]);

    const handlePictureChoice = (name) => {
        const chosenPicture = gallery.find((picture) => picture.name === name);
        setChosenPicture(chosenPicture);
    };

    const switchPicture = (direction) => {
        const pictureIndex = gallery.findIndex(
            (picture) => picture.name === chosenPicture.name
        );

        switch (direction) {
            case 1:
                if (pictureIndex < gallery.length - 1) {
                    const newPicture = gallery[pictureIndex + 1];
                    setChosenPicture(newPicture);
                } else {
                    setChosenPicture(gallery[0]);
                }
                break;
            case -1:
                if (pictureIndex > 0) {
                    const newPicture = gallery[pictureIndex - 1];
                    setChosenPicture(newPicture);
                } else {
                    setChosenPicture(gallery[gallery.length - 1]);
                }
                break;
            default:
        }
    };

    let { path } = useRouteMatch();

    const overMd = useMediaQuery(theme.breakpoints.up("md"));
    const colNumber = overMd ? 3 : 2;

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "80vh"
            }}
        >
            <ImageList variant="masonry" cols={colNumber} gap={10}>
                {gallery.map((picture) => (
                    <Grow
                        key={picture.name}
                        in={animate}
                        style={{ transformOrigin: "0 0 0" }}
                        {...(animate ? { timeout: 1500 } : {})}
                    >
                        <Link to={`/galeria/${picture.name}`}>
                            <ImageListItem key={picture.name}>
                                <img
                                    src={picture.src1}
                                    alt={picture.name}
                                    name={picture.name}
                                    loading="lazy"
                                    onClick={(e) => {
                                        handlePictureChoice(e.target.name);
                                    }}
                                />
                            </ImageListItem>
                        </Link>
                    </Grow>
                ))}
            </ImageList>
            <Switch>
                <Route path={`${path}/:pictureName`}>
                    <Picture
                        picture={chosenPicture}
                        switchPicture={switchPicture}
                    />
                </Route>
            </Switch>
        </Box>
    );
}

export default withRouter(Gallery);
