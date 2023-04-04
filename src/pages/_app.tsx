import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "@/styles/globals.css";
import theme from "@/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Box } from "@mui/material";
import type { AppProps } from "next/app";

const bgSrc = "/bg.jpg";

export default function App({ Component, pageProps }: AppProps) {
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
                <Component {...pageProps} />
                <Footer />
            </Box>
        </ThemeProvider>
    );
}
