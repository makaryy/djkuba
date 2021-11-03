import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/router.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();

app.use("/", router);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
