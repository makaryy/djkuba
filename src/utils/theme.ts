import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark",
        // background: "#0B0B0B",
        primary: {
            light: "#484848",
            main: "#000000",
            dark: "#000000",
            contrastText: "#ffffff",
        },
        secondary: {
            light: "#ffffff",
            main: "#fafafa",
            dark: "#c7c7c7",
            contrastText: "#000000",
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(0,0,0,.9)",
                },
            },
        },
    },
});

export default theme;
