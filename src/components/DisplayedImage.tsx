import { Backdrop, Button } from "@mui/material";
import Link from "next/link";
import { ArrowForward, ArrowBack, Close } from "@mui/icons-material/";
import Image from "next/image";

interface Props {
    name: string;
    src: string;
    index: number;
    limit: number;
}

const DisplayedImage = ({ src, name, index, limit }: Props) => {
    const back = (name: string, limit: number) => {
        const [id] = name.split(".");
        const index = Number(id);
        const newIndex = index - 1 <= 0 ? limit : index - 1;
        return newIndex;
    };

    const forward = (name: string, limit: number) => {
        const [id] = name.split(".");
        const index = Number(id);
        const newIndex = index + 1 > limit ? 0 : index + 1;
        return newIndex;
    };
    return (
        <div>
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={true}
            >
                <Link href="" scroll={false}>
                    <Button
                        sx={{
                            position: "absolute",
                            left: "10px",
                            top: "20px",
                            backgroundColor: "rgba(0,0,0,0.8)",
                            backdropFilter: "blur(5px)",
                        }}
                    >
                        <Close sx={{ color: "white", fontSize: "1.5rem" }} />
                    </Button>
                </Link>
                <Link href={`?image=${back(name, limit)}`} scroll={false}>
                    <Button
                        sx={{
                            position: "absolute",
                            left: "10px",
                            backgroundColor: "rgba(0,0,0,0.8)",
                            backdropFilter: "blur(5px)",
                        }}
                    >
                        <ArrowBack sx={{ color: "white", fontSize: "1.5rem" }} />
                    </Button>
                </Link>
                <Image
                    src={src}
                    alt={name}
                    width={2100}
                    height={1400}
                    style={{ maxHeight: "90vh", maxWidth: "80vw", height: "auto", width: "auto" }}
                />
                <Link href={`?image=${forward(name, limit)}`} scroll={false}>
                    <Button
                        sx={{
                            position: "absolute",
                            right: "10px",
                            backgroundColor: "rgba(0,0,0,0.8)",
                            backdropFilter: "blur(5px)",
                        }}
                    >
                        <ArrowForward sx={{ color: "white", fontSize: "1.5rem" }} />
                    </Button>
                </Link>
            </Backdrop>
        </div>
    );
};

export default DisplayedImage;
