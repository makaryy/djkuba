import axios from "axios";

export const sendMessage = (message) =>
    axios.post("https://djkuba.herokuapp.com/send", message);

export const getGallery = async () => {
    const response = await axios.get("http://djkuba.herokuapp.com/gallery");
    return response;
};
