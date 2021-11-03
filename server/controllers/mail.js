import mailgun from "mailgun-js";
import dotenv from "dotenv";

dotenv.config();

const mg = mailgun({ apiKey: process.env.API_KEY, domain: process.env.DOMAIN });

export const sendMail = (req, res) => {
    mg.messages().send(req.body, (error, body) => {
        console.log(body);
    });
};
