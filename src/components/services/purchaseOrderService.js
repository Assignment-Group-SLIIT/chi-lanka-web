import axios from "axios";

const HOST = "http://localhost:4000";

//to add a purchase order
export const addOrder = async () => {
    try {
        const response = await axios.get(`${HOST}/order/addOrder`);
        console.log("dataaaaaaaa", response)
        return {
            ok: true
        }
    } catch (error) {
        return {
            ok: false
        }

    }
}

//to retrieve all purchase orders
export const getAllPurchaseOrders = async () => {
    try {
        const response = await axios.get(`${HOST}/order/displayOrders`);
        console.log("dataaaaaaaa", response)
        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false
        }

    }
}

//to update the status of the purchase order
export const updateRequisitionStatus = async (orderID, orderPayload) => {
    try {
        const response = await axios.put(`${HOST}/order/updateOrder/${orderID}`, orderPayload);
        return {
            ok: true,
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
}

//to delete a purchase order record
export const deletePurchaseOrderRecord = async (orderID) => {
    try {
        const response = await axios.delete(`${HOST}/order/deleteOrder/${orderID}`);
        return {
            ok: true,
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
}

//to view one purchase order record
export const getOnePurchaseOrderRecord = async (rID) => {
    try {
        const response = await axios.get(`${HOST}/order/getOrderByID/${rID}`);
        return {
            ok: true,
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
}