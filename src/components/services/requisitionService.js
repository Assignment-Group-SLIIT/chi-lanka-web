import axios from "axios";

const HOST = "http://localhost:4000";

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