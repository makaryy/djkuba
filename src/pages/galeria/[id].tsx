import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";
import cloudinary from "@/utils/cloudinary";
import { ICloudinarySearchResult, IImage } from "@/utils/types";
import { Backdrop, Box, Button, useMediaQuery } from "@mui/material";
import { ArrowForward, ArrowBack, Close } from "@mui/icons-material/";
import { motion, AnimatePresence } from "framer-motion";
import { useDisplayedImage } from "@/utils/hooks";

interface Props {
    currentPhoto: IImage;
    lastId: number;
}

const DisplayedImage = ({ currentPhoto, lastId }: Props) => {
    const {
        handleBack,
        handleClose,
        handleForward,
        handleTouchEnd,
        handleTouchMove,
        handleTouchStart,
        lastViewedPhoto,
        nextPhoto,
        overMd,
        overSm,
        push,
    } = useDisplayedImage(currentPhoto, lastId);

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
            <Backdrop
                role="dialog"
                sx={{
                    backgroundColor: "rgba(0,0,0, .8)",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={true}
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div key={`box${currentPhoto.id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <Box
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            sx={{
                                width: "max-content",
                                height: "max-content",
                                maxHeight: "100vh",
                                maxWidth: "100vw",
                                position: "relative",
                                aspectRatio: currentPhoto.aspectRatio,
                            }}
                        >
                            <Link href="/galeria" scroll={false}>
                                <Button
                                    sx={{
                                        zIndex: 10,
                                        position: "absolute",
                                        left: "10px",
                                        top: "20px",
                                        boxShadow: "0px 0px 2px 0px #acacac",
                                        backgroundColor: "black",
                                    }}
                                    onClick={handleClose}
                                >
                                    <Close sx={{ color: "white", fontSize: "1.5rem" }} />
                                </Button>
                            </Link>
                            {overSm && (
                                <Button
                                    sx={{
                                        zIndex: 10,
                                        position: "absolute",
                                        left: "10px",
                                        top: "50%",
                                        boxShadow: "0px 0px 2px 0px #acacac",
                                        backgroundColor: "black",
                                    }}
                                    onClick={handleBack}
                                >
                                    <ArrowBack sx={{ color: "white", fontSize: "1.5rem" }} />
                                </Button>
                            )}
                            <motion.div
                                key={`photo${currentPhoto.id}`}
                                initial={{ x: lastViewedPhoto && lastViewedPhoto > currentPhoto.id ? -600 : 600, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: nextPhoto && nextPhoto < currentPhoto.id ? 600 : -600, opacity: 0 }}
                            >
                                <Image
                                    src={currentPhoto.src}
                                    alt={currentPhoto.alt}
                                    width={currentPhoto.width}
                                    height={currentPhoto.height}
                                    style={
                                        overMd
                                            ? {
                                                  height: "100%",
                                                  width: "auto",
                                                  maxHeight: "100vh",
                                                  maxWidth: "100vw",
                                                  aspectRatio: currentPhoto.aspectRatio,
                                              }
                                            : {
                                                  width: "100%",
                                                  height: "auto",
                                                  maxHeight: "100vh",
                                                  maxWidth: "100vw",
                                                  aspectRatio: currentPhoto.aspectRatio,
                                              }
                                    }
                                />
                            </motion.div>
                            {overSm && (
                                <Button
                                    sx={{
                                        zIndex: 10,
                                        position: "absolute",
                                        right: "10px",
                                        top: "50%",
                                        backgroundColor: "black",
                                        boxShadow: "0px 0px 2px 0px #acacac",
                                    }}
                                    onClick={handleForward}
                                >
                                    <ArrowForward sx={{ color: "white", fontSize: "1.5rem" }} />
                                </Button>
                            )}
                        </Box>
                    </motion.div>
                </AnimatePresence>
            </Backdrop>
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const results: ICloudinarySearchResult = await cloudinary.v2.search
        .expression("folder=djkuba")
        .sort_by("public_id", "asc")
        .max_results(400)
        .execute();

    const images: IImage[] = results.resources.map((image, index) => {
        return {
            src: image.secure_url,
            id: index + 1,
            alt: `DJ KUBA galeria - zdjęcie ${image.filename}`,
            width: image.width,
            height: image.height,
            aspectRatio: `${image.aspect_ratio} / 1`,
        };
    });

    const currentPhoto = images.find((img) => img.id === Number(context.params?.id));

    const lastId = images[images.length - 1].id;

    return {
        props: {
            currentPhoto,
            lastId,
        },
    };
};

export async function getStaticPaths() {
    const results: ICloudinarySearchResult = await cloudinary.v2.search
        .expression("folder=djkuba")
        .sort_by("public_id", "asc")
        .max_results(400)
        .execute();

    const paths = results.resources.map((image, index) => {
        const id = (index + 1).toString();
        return { params: { id } };
    });

    return {
        paths,
        fallback: false,
    };
}

export default DisplayedImage;
