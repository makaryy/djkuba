import { Container, CssBaseline, Grid, ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import React from "react";
import Form from "./components/Form";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Info from "./components/Info";
import Contact from "./components/Contact";
import wesele from "./images/wesele.jpg";
import event from "./images/event.jpg";
import plener from "./images/plener.jpg";
import osiemnastka from "./images/osiemnastka.jpg";
import jubileusz from "./images/jubileusz.jpg";
import bg from "./images/bg.jpg";
import console from "./images/console.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        fontFamily: ["Roboto", "sans-serif"],
    },
    gridParent: {
        justifyContent: "center",
    },
}));

function App() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.root}>
                <TopBar />
                <Container maxWidth="lg">
                    <Grid container spacing={8} className={classes.gridParent}>
                        <Grid item xs={12}>
                            <About />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Info title={"OSIEMNASTKI"} image={osiemnastka} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Info title={"WESELA"} image={wesele} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Info title={"JUBILEUSZE"} image={jubileusz} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Info title={"EVENTY"} image={event} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Info title={"PLENERY"} image={plener} />
                        </Grid>
                        <Grid item xs={12}>
                            <Contact></Contact>
                        </Grid>
                        <Grid item>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default App;
