import type { NextApiRequest, NextApiResponse } from "next";
import { format } from "date-fns";

type Data = {
    status: number;
    message: string;
};

import formData from "form-data";
import Mailgun from "mailgun.js";
import { IFormData } from "@/types";

const generateHtml = (params: Omit<IFormData, "to">) => {
    const { date, email, firstName, lastName, message, partyType, phoneNumber } = params;
    const formattedDate = format(new Date(date), "dd/MM/yyyy");
    return `
  <html>
  <head>
  <style type="text/css">
    span {
      text-decoration: underline;
      font-size: 11px;
    }
    p {
      font-size: 16px;
    }
  </style>
  </head>
  <body>
  <span>Dostałeś następującą wiadomość ze strony djkuba.pl: </span>
  <div>
    <h1>${partyType} w dniu ${formattedDate}</h1
    <h2>Nadawca: ${firstName} ${lastName}</h2>
    <h3>E-mail: ${email}</h3>
    <h3>Tel. ${phoneNumber}</h3>
  </div>
  <p>Treść wiadomości:</p>
  <p>${message}</p>
  </body>
  </html>
`;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === "POST") {
        console.log(process.env.FIREBASE_CREDENTIALS);

        const body: IFormData = JSON.parse(req.body);
        if (process.env.MAILGUN_DOMAIN && process.env.MAILGUN_API_KEY && body) {
            try {
                const mailgun = new Mailgun(formData);
                const mg = mailgun.client({ username: "api", key: process.env.MAILGUN_API_KEY });

                const { status } = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
                    to: "makaryyrakam@gmail.com",
                    // to: "kontakt@djkuba.pl",
                    from: body.email,
                    subject: "Wiadomość ze strony djkuba.pl",
                    html: generateHtml(body),
                });
                res.status(200).json({ status, message: "Message sent." });
            } catch (error) {
                res.status(500).send({ status: 500, message: "There was a problem with sending message. Try again." });
            }
        } else {
            res.status(500).send({ status: 500, message: "There was a problem with sending message. Try again." });
        }
    }
}
