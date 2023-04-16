import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { ICloudinarySearchResult, IImage } from "@/utils/types";
import cloudinary from "@/utils/cloudinary";
import theme from "@/utils/theme";
import { Box, ImageList, Grow, ImageListItem, useMediaQuery } from "@mui/material";

interface Props {
    images: IImage[];
}

const Galeria = ({ images }: Props) => {
    const overMd = useMediaQuery(theme.breakpoints.up("md"));
    const overSm = useMediaQuery(theme.breakpoints.up("sm"));
    const colNumber = overMd ? 3 : overSm ? 2 : 1;

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
                            <Link href={`/galeria/${image.id}`} shallow={true}>
                                <ImageListItem
                                    sx={
                                        overSm
                                            ? {
                                                  transition: "transform 200ms",
                                                  ":hover": {
                                                      transform: "scale(1.05)",
                                                  },
                                              }
                                            : {}
                                    }
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        loading="lazy"
                                        width={600}
                                        height={400}
                                        style={{ width: "100%", aspectRatio: "3/2", height: "auto", objectFit: "cover" }}
                                    />
                                </ImageListItem>
                            </Link>
                        </Grow>
                    ))}
                </ImageList>
            </Box>
        </>
    );
};

export async function getStaticProps() {
    const results: ICloudinarySearchResult = await cloudinary.v2.search
        .expression("folder=djkuba")
        .sort_by("public_id", "asc")
        .max_results(400)
        .execute();

    const images: IImage[] = results.resources.map((image: any, index: number) => {
        return { src: image.secure_url, id: index + 1, alt: image.public_id };
    });

    return { props: { images } };
}

export default Galeria;
