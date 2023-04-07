import theme from "@/theme";
import { Box, ImageList, Grow, ImageListItem, useMediaQuery } from "@mui/material";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { useEffect, useState } from "react";
import { IImage } from "@/types";
import DisplayedImage from "@/components/DisplayedImage";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

interface Props {
    images: IImage[];
}

const Galeria = ({ images }: Props) => {
    const [displayedImage, setDisplayedImage] = useState<IImage | null>(null);
    const router = useRouter();
    const { image } = router.query;
    const overMd = useMediaQuery(theme.breakpoints.up("md"));
    const overSm = useMediaQuery(theme.breakpoints.up("sm"));
    const colNumber = overMd ? 3 : overSm ? 2 : 1;

    useEffect(() => {
        const search = images.find((img) => getIndex(img.name) === Number(image));
        search ? setDisplayedImage(search) : setDisplayedImage(null);
    }, [image, images]);

    const getIndex = (name: string) => {
        const [id] = name.split(".");
        const index = Number(id);
        return index;
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
            <Box
                sx={{
                    padding: "30px",
                    minHeight: "85vh",
                    backgroundColor: "rgba(0,0,0,.5)",
                }}
            >
                <ImageList variant="standard" cols={colNumber} gap={24} sx={{ overflow: "hidden" }}>
                    {images.map((image, index) => (
                        <Grow key={`image${index}`} in={true} {...(true ? { timeout: 1500 } : {})}>
                            {overSm ? (
                                <Link href={`?image=${getIndex(image.name)}`} shallow={true}>
                                    <div>
                                        <ImageListItem
                                            sx={{
                                                transition: "transform 200ms",
                                                ":hover": {
                                                    transform: "scale(1.05)",
                                                },
                                            }}
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.name}
                                                loading="lazy"
                                                width={600}
                                                height={400}
                                                style={{ width: "100%", aspectRatio: "3/2", height: "auto", objectFit: "cover" }}
                                            />
                                        </ImageListItem>
                                    </div>
                                </Link>
                            ) : (
                                <ImageListItem>
                                    <Image
                                        src={image.src}
                                        alt={image.name}
                                        loading="lazy"
                                        width={400}
                                        height={300}
                                        style={{ width: "100%", objectFit: "cover" }}
                                    />
                                </ImageListItem>
                            )}
                        </Grow>
                    ))}
                </ImageList>
            </Box>
            {displayedImage ? <DisplayedImage src={displayedImage.src} name={displayedImage.name} index={0} limit={images.length} /> : null}
        </>
    );
};

export async function getStaticProps() {
    const files = fs.readdirSync(path.join(process.cwd(), "public", "gallery"), { encoding: "utf-8" });
    const images = files.map((file) => {
        const [id] = file.split(".");
        const name = file;
        const src = `/gallery/${name}`;
        return { name, src, id };
    });

    return { props: { images } };
}

export default Galeria;
