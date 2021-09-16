import axios from "axios";

const HOST = "http://localhost:4000";

//to add a requisition
export const addRequisition = async () => {
    try {
        const response = await axios.get(`${HOST}/requisition/addRequisition`);
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


//to delete a requisition record
export const deleteRequisitionRecord = async (payload) => {
    try {
        const response = await axios.post(`${HOST}/requisition/deleteRequisition`, payload);
        return {
            ok: true,
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
}

//to update the status of the requisition record
export const updateRequisitionStatus = async (reqID, payload) => {

    console.log("payload idddddddd", reqID)
    console.log("payloaddddddddddddd", payload)

    // const newOrder = {
    //     orderid = payload.order,
    //     orderdate,
    //     suppliername,
    //     title,
    //     shipto,
    //     status,
    //     total,
    //     comment,
    // };

    // const newOrderItems = {
    //     orderid,
    //     item01,
    //     item02,
    //     item03,
    //     itemName01,
    //     itemName02,
    //     itemName03,
    //     qty01,
    //     qty02,
    //     qty03,
    //     amount1,
    //     amount2,
    //     amount3
    // }

    if (payload.status === "Approved") {
        const res = deleteRequisitionRecord(payload)
        console.log("response for delete", res)
    } else if (payload.status === "Declined") {
        console.log("email sent")
        try {
            const response = await axios.put(`${HOST}/requisition/updateRequisition/${reqID}`, payload);
            return {
                ok: true,
            };
        } catch (error) {
            return {
                ok: false, err: error.response.data.status
            };
        }
    } else {
        try {
            const response = await axios.put(`${HOST}/requisition/updateRequisition/${reqID}`, payload);
            return {
                ok: true,
            };
        } catch (error) {
            return {
                ok: false, err: error.response.data.status
            };
        }
    }
}

//to view one requisition record
export const getOneRequisitionRecord = async (reqID) => {
    try {
        const response = await axios.get(`${HOST}/requisition/getRequisitionByID/${reqID}`);
        return {
            ok: true,
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
}