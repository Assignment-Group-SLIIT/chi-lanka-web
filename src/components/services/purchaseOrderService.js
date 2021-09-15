import axios from "axios";

const HOST = "http://localhost:4000";

//to add a requisition
export const addOrder = async () => {
    try {
        const response = await axios.get(`${HOST}/order/addRequisition`);
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

//to retrieve all requisition records
export const getAllRequisition = async () => {
    try {
        const response = await axios.get(`${HOST}/requisition/displayRequisition`);
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

//to update the status of the requisition record
export const updateRequisitionStatus = async (reqID, payload) => {
    try {
        const response = await axios.put(`${HOST}/order/updateRequisition/${reqID}`, payload);
        return {
            ok: true,
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
}

//to delete a requisition record
export const deleteRequisitionRecord = async (payload) => {
    try {
        const response = await axios.post(`${HOST}/order/deleteRequisition`, payload);
        return {
            ok: true,
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
}

//to view one requisition record
export const getOneRequisitionRecord = async (reqID) => {
    try {
        const response = await axios.get(`${HOST}/order/getRequisitionByID/${reqID}`);
        return {
            ok: true,
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
}