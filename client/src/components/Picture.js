import React from "react";
import { Backdrop, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

function Picture({ picture, switchPicture }) {
    return (
        <div>
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
                open={true}
            >
                <Link to="/galeria">
                    <Button
                        sx={{
                            position: "absolute",
                            left: "10px",
                            top: "20px",
                            backgroundColor: "rgba(0,0,0,0.7)"
                        }}
                    >
                        <CloseIcon
                            sx={{ color: "white", fontSize: "1.5rem" }}
                        />
                    </Button>
                </Link>
                <Button
                    onClick={() => {
                        switchPicture(-1);
                    }}
                    sx={{
                        position: "absolute",
                        left: "10px",
                        backgroundColor: "rgba(0,0,0,0.7)"
                    }}
                >
                    <ArrowBackIcon
                        sx={{ color: "white", fontSize: "1.5rem" }}
                    />
                </Button>
                <img
                    src={picture.src2}
                    alt={picture.name}
                    style={{ maxHeight: "80vh", maxWidth: "60vw" }}
                />
                <Button
                    onClick={() => {
                        switchPicture(1);
                    }}
                    sx={{
                        position: "absolute",
                        right: "10px",
                        backgroundColor: "rgba(0,0,0,0.7)"
                    }}
                >
                    <ArrowForwardIcon
                        sx={{ color: "white", fontSize: "1.5rem" }}
                    />
                </Button>
            </Backdrop>
        </div>
    );
}

export default Picture;
