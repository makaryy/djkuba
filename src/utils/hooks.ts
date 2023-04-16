import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useState, TouchEvent, useEffect } from "react";
import { LastPhotoContext } from "./context";
import theme from "./theme";
import { IImage } from "./types";

export const useDisplayedImage = (currentPhoto: IImage, lastId: number) => {
    const { lastViewedPhoto, setLastViewedPhoto } = useContext(LastPhotoContext);
    const [nextPhoto, setNextPhoto] = useState<null | number>(null);
    const [touchStartPoint, setTouchStartPoint] = useState<number | null>(null);
    const [touchMovePoint, setTouchMovePoint] = useState<number | null>(null);
    const overMd = useMediaQuery(theme.breakpoints.up("md"));
    const overSm = useMediaQuery(theme.breakpoints.up("sm"));
    const overLg = useMediaQuery(theme.breakpoints.up("lg"));

    const { push } = useRouter();

    const back = (id: number, lastId: number) => (id - 1 <= 0 ? lastId : id - 1);

    const forward = (id: number, lastId: number) => (id + 1 > lastId ? 1 : id + 1);

    const handleBack = () => {
        setLastViewedPhoto(currentPhoto.id);
        setNextPhoto(back(currentPhoto.id, lastId));
        push(`/galeria/${back(currentPhoto.id, lastId)}`);
    };

    const handleForward = () => {
        setLastViewedPhoto(currentPhoto.id);
        setNextPhoto(forward(currentPhoto.id, lastId));
        push(`/galeria/${forward(currentPhoto.id, lastId)}`);
    };

    const handleClose = () => {
        setLastViewedPhoto(currentPhoto.id);
    };

    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        setTouchStartPoint(e.touches[0].clientX);
    };

    const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        setTouchMovePoint(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
        if (touchStartPoint && touchMovePoint) {
            if (touchStartPoint > touchMovePoint) handleForward();
            if (touchStartPoint < touchMovePoint) handleBack();
        }
    };

    return {
        lastViewedPhoto,
        nextPhoto,
        handleBack,
        handleForward,
        handleClose,
        handleTouchEnd,
        handleTouchMove,
        handleTouchStart,
        overLg,
        overMd,
        overSm,
    };
};
