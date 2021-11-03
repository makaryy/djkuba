import admin from "firebase-admin";
import { getStorage } from "firebase-admin/storage";

import dotenv from "dotenv";

dotenv.config();

admin.initializeApp({
    credential: admin.credential.cert({
        type: process.env.FIREBASE_TYPE,
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
        private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        client_id: process.env.FIREBASE_CLIENT_ID,
        auth_uri: process.env.FIREBASE_AUTH_URI,
        token_uri: process.env.FIREBASE_TOKEN_URI,
        auth_provider_x509_cert_url:
            process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
    }),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET
});

const db = admin.firestore();

//GET DEFAULT BUCKET
// const bucket = await getStorage().bucket();

//GET FILES FROM BUCKET
// const files = await bucket.getFiles();

// FUNCTION TO ADD ALL DATA FROM STORAGE TO FIRESTORE
// const addToDb = async (data) => {
//     const res = await db.collection("gallery").add({
//         name: data.name,
//         url: `https://firebasestorage.googleapis.com/v0/b/${data.bucket}/o/${data.name}?alt=media&token=${data.token}`
//     });
// };

//FUNCTION TO FORMAT DATA ADDED TO FIRESTORE
// const fromStorageToDb = () => {
//     let arr = files[0].map(async (file) => {
//         try {
//             const metadata = await file.getMetadata();
//             const finalData = {
//                 name: metadata[0].name,
//                 bucket: metadata[0].bucket,
//                 token: metadata[0].metadata.firebaseStorageDownloadTokens
//             };
//             addToDb(finalData);
//         } catch (err) {
//             console.log(err);
//         }
//     });
//     return arr;
// };

//FUNCTION CALL TO ADD FORMATTED DATA TO FIRESTORE
// fromStorageToDb();

export default db;
