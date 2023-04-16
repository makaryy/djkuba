import { createContext } from "react";
import { ILastPhotoContext } from "./types";

export const LastPhotoContext = createContext<ILastPhotoContext>({
    lastViewedPhoto: null,
    setLastViewedPhoto: (id: number | null) => undefined,
});
