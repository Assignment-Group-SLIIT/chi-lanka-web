import axios from "axios";

const HOST = "http://localhost:4000";

//for retrieving items for supplier1
export const getItemDetails = async (itemCode) => {
    console.log("data",);
    try {
        const response = await axios.get(`${HOST}/item/getItemByID/${itemCode}`);
        console.log(response, "res");
        return {
            ok: true,
            data: response.data,
        };
    } catch (error) {
        return {
            ok: false,
        };
    }
};