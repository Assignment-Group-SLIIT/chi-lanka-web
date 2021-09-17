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
            ok: false, err: error.response.data.status
        };
    }
};

//for retrieving available list of items
export const getItemsList = async () => {
    console.log("data",);
    try {
        const response = await axios.get(`${HOST}/item/displayAvailableItems`);
        console.log(response, "res");
        return {
            ok: true,
            data: response.data
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
};

export const updateItemDetails = async (itemId, updateItemPayload) => {
    console.log("dataa", updateItemPayload);
    await axios.put(`${HOST}/item/updateItem/${itemId}`, updateItemPayload);
    try {
        return {
            ok: true,
        }

    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        }
    }

};