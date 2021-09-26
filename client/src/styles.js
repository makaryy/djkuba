import { makeStyles } from "@material-ui/core/styles";
import theme from "./theme";

export default makeStyles((theme) => ({
    Paper: {
        padding: "30px",
        backgroundColor: "rgba(0,0,0,.7)"
    },
    AppBar: {
        marginBottom: "50px",
        backgroundColor: "black"
    },
    Toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    links: {
        textAlign: "center"
    },
    logo: {
        width: "250px"
    },
    Card: {
        backgroundColor: "rgba(0,0,0,.7)"
    },
    CardContent: {
        // width: "100%",
    },
    media: {
        borderRadius: "4px"
    },
    About: {
        marginTop: "100px",
        backgroundColor: "rgba(0,0,0,.7)"
        // backgroundPosition: "center 100vh",
        // backgroundSize: "cover",
        // width: "100%",
    },
    Icon: {
        fontSize: "5.5rem",
        color: "white"
    },
    FormAlert: {
        marginBottom: "25px"
    }
}));
