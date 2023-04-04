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

interface Props {
    images: IImage[];
}

const galeria = ({ images }: Props) => {
    const [displayedImage, setDisplayedImage] = useState<IImage | null>(null);
    const router = useRouter();
    const { image } = router.query;
    const overMd = useMediaQuery(theme.breakpoints.up("md"));
    const overSm = useMediaQuery(theme.breakpoints.up("sm"));
    const colNumber = overMd ? 3 : overSm ? 2 : 1;

    useEffect(() => {
        const search = images.find((img) => getIndex(img.name) === Number(image));
        search ? setDisplayedImage(search) : setDisplayedImage(null);
    }, [image]);

    const getIndex = (name: string) => {
        const [id] = name.split(".");
        const index = Number(id);
        return index;
    };

    return (
        <>
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

export default galeria;
