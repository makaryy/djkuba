import dotenv from "dotenv";
import db from "../firebase/db.js";

dotenv.config();

export const getGallery = async (req, res, next) => {
    try {
        const gallery = await db.collection("gallery");
        const data = await gallery.get();
        const galleryArray = [];
        if (data.empty) {
            res.status(404).send("No pictures in gallery");
        } else {
            data.forEach((doc) => {
                galleryArray.push(doc.data());
            });
            res.send(galleryArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};
