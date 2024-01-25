import axios from 'axios';

export const topAlbum = async () => {
    try {
        const response = await axios.get(
            "https://qtify-backend-labs.crio.do/albums/top"
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const newAlbum = async () => {
    try {
        const response = await axios.get(
            "https://qtify-backend-labs.crio.do/albums/new"
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};