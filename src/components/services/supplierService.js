import axios from "axios";

const HOST = "http://localhost:4000";

//for retrieving items for supplier1
export const getItemsFromSupplier = async (suppliername) => {
    console.log("data",);
    try {
        const response = await axios.get(`${HOST}/supplier/searchSupplierItems/${suppliername}`);
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

//for retrieving supplier details
export const getSupplierByID = async (itemID) => {
    console.log("data",);
    try {
        const response = await axios.get(`${HOST}/supplier/getSupplierByID/${itemID}`);
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
//for retrieving supplier details
export const getSupplier = async (suppliername) => {
    try {
        const response = await axios.get(`${HOST}/supplier/getSupplierByName/${suppliername}`);
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