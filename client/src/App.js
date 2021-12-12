import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Container } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import theme from "./theme";

import Contact from "./components/Contact";
import Header from "./components/Header";
import About from "./components/About";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import bg from "./images/bg.jpg";
import Offer from "./components/Offer";
import Footer from "./components/Footer";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Box
                    sx={{
                        minHeight: "100vh",
                        backgroundImage: `url(${bg})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        fontFamily: ["Roboto", "sans-serif"],
                        paddingTop: "10vh"
                    }}
                >
                    <Nav />
                    <Container maxWidth="lg">
                        <Switch>
                            <Route path="/" exact component={Header} />
                            <Route path="/omnie" component={About} />
                            <Route path="/oferta" component={Offer} />
                            <Route path="/galeria" component={Gallery} />
                            <Route path="/kontakt" component={Contact} />
                        </Switch>
                    </Container>
                    <Footer />
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
