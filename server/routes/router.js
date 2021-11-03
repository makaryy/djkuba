import express from "express";

import { sendMail } from "../controllers/mail.js";
import { getGallery } from "../controllers/gallery.js";

const router = express.Router();

router.post("/send", sendMail);
router.get("/gallery", getGallery);

export default router;
