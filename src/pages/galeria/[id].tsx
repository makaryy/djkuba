import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { useContext, useState } from "react";
import { LastPhotoContext } from "@/utils/context";
import cloudinary from "@/utils/cloudinary";
import { IImage } from "@/utils/types";
import { Backdrop, Box, Button } from "@mui/material";
import { ArrowForward, ArrowBack, Close } from "@mui/icons-material/";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
    currentPhoto: IImage;
    lastPhotoId: number;
}

const DisplayedImage = ({ currentPhoto, lastPhotoId }: Props) => {
    const { lastViewedPhoto, setLastViewedPhoto } = useContext(LastPhotoContext);
    const [nextPhoto, setNextPhoto] = useState<null | number>(null);
    const { push } = useRouter();

    const back = (id: number, lastId: number) => {
        const newId = id - 1 <= 0 ? lastId : id - 1;
        return newId;
    };

    const forward = (id: number, lastId: number) => {
        const newId = id + 1 > lastId ? 1 : id + 1;
        return newId;
    };
    return (
        <>
            <Head>
                <title>Galeria - DJ Kuba</title>
                <meta name="description" content="Galeria zdjęć - imprezy, wesela i osiemnastki czyli DJ KUBA w akcji." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Box>
                <Backdrop
                    sx={{
                        backgroundColor: "rgba(0,0,0, .8)",
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={true}
                >
                    <Link href="/galeria" scroll={false}>
                        <Button
                            sx={{
                                position: "absolute",
                                left: "10px",
                                top: "20px",
                                boxShadow: "0px 0px 2px 0px #acacac",
                                backgroundColor: "black",
                            }}
                            onClick={() => {
                                setLastViewedPhoto(currentPhoto.id);
                            }}
                        >
                            <Close sx={{ color: "white", fontSize: "1.5rem" }} />
                        </Button>
                    </Link>
                    <Button
                        sx={{
                            position: "absolute",
                            left: "10px",
                            boxShadow: "0px 0px 2px 0px #acacac",
                            backgroundColor: "black",
                        }}
                        onClick={() => {
                            setLastViewedPhoto(currentPhoto.id);
                            setNextPhoto(back(currentPhoto.id, lastPhotoId));
                            push(`/galeria/${back(currentPhoto.id, lastPhotoId)}`);
                        }}
                    >
                        <ArrowBack sx={{ color: "white", fontSize: "1.5rem" }} />
                    </Button>
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={`photo${currentPhoto.id}`}
                            initial={{ x: lastViewedPhoto && lastViewedPhoto > currentPhoto.id ? -300 : 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: nextPhoto && nextPhoto < currentPhoto.id ? 300 : -300, opacity: 0 }}
                        >
                            <Image
                                src={currentPhoto.src}
                                alt={currentPhoto.alt}
                                width={2100}
                                height={1400}
                                style={{ maxHeight: "90vh", maxWidth: "80vw", height: "auto", width: "auto" }}
                            />
                        </motion.div>
                    </AnimatePresence>
                    <Button
                        sx={{
                            position: "absolute",
                            right: "10px",
                            backgroundColor: "black",
                            boxShadow: "0px 0px 2px 0px #acacac",
                        }}
                        onClick={() => {
                            setLastViewedPhoto(currentPhoto.id);
                            setNextPhoto(forward(currentPhoto.id, lastPhotoId));
                            push(`/galeria/${forward(currentPhoto.id, lastPhotoId)}`);
                        }}
                    >
                        <ArrowForward sx={{ color: "white", fontSize: "1.5rem" }} />
                    </Button>
                </Backdrop>
            </Box>
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const results = await cloudinary.v2.search.expression("folder=djkuba").sort_by("public_id", "asc").max_results(400).execute();

    const images: IImage[] = results.resources.map((image: any) => {
        const [id] = image.filename.split("_");
        return { src: image.secure_url, id: Number(id), alt: image.public_id };
    });

    const currentPhoto = images.find((img) => img.id === Number(context.params?.id));
    const lastPhotoId = images.length - 1;

    return {
        props: {
            currentPhoto,
            lastPhotoId,
        },
    };
};

export async function getStaticPaths() {
    const results = await cloudinary.v2.search.expression("folder=djkuba").sort_by("public_id", "asc").max_results(400).execute();

    const paths = results.resources.map((image: any) => {
        const [name] = image.filename.split("_");
        const id = Number(name).toString();
        return { params: { id } };
    });

    return {
        paths,
        fallback: false,
    };
}

export default DisplayedImage;
