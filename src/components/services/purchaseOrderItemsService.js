import axios from "axios";

const HOST = "http://localhost:4000";

//to add a purchase order items 
export const addOrderItems = async (orderItemsPayload) => {
    try {
        const response = await axios.post(`${HOST}/orderItems/addOrderItems`, orderItemsPayload);
        console.log("dataaaaaaaa", response)
        return {
            ok: true
        }
    } catch (error) {
        return {
            ok: false, err: error.error.response.data.error
        }

    }
}

//to view one purchase orders items list record
export const getOrderItemsforOrder = async (orderID) => {
    console.log("order id", orderID)
    try {
        const response = await axios.get(`${HOST}/orderItems/displayOrderItems/${orderID}`);
        return {
            ok: true,
            data: response.data
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
}

//to update the status of the purchase order  items list
export const updateOrderItemsList = async (orderID, orderItemsPayload) => {
    try {
        const response = await axios.put(`${HOST}/orderItems/updateOrderItems/${orderID}`, orderItemsPayload);
        return {
            ok: true,
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
}

//to delete a purchase order items list record
export const deleteOrderItemLists = async (orderID) => {
    try {
        const response = await axios.delete(`${HOST}/orderItems/deleteOrderItems/${orderID}`);
        return {
            ok: true,
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
}

