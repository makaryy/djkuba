import mailgun from 'mailgun-js'
import dotenv from 'dotenv'

dotenv.config()

const mg = mailgun({apiKey: process.env.API_KEY, domain: process.env.DOMAIN});
  
  export const sendMail = (data) => {
    mg.messages().send(data.body, (error, body) => {
      console.log(body);
    });
 }