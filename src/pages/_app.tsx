import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "@/styles/globals.css";
import { LastPhotoContext } from "@/utils/context";
import theme from "@/utils/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Box } from "@mui/material";
import type { AppProps } from "next/app";
import { useState } from "react";

const bgSrc = "/bg.jpg";

export default function App({ Component, pageProps }: AppProps) {
    const [lastViewedPhoto, setLastViewedPhoto] = useState<null | number>(null);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    minHeight: "100vh",
                    background: `url('${bgSrc}')`,
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                    fontFamily: ["Roboto", "sans-serif"],
                }}
            >
                <Nav />
                <LastPhotoContext.Provider value={{ lastViewedPhoto, setLastViewedPhoto }}>
                    <Component {...pageProps} />
                </LastPhotoContext.Provider>
                <Footer />
            </Box>
        </ThemeProvider>
    );
}
