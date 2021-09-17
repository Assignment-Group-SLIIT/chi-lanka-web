//to retrieve all requisition records
import axios from "axios";

const HOST = "http://localhost:4000";

//to retrive all drafts
export const getAllDrafts = async () => {
    try {
        const response = await axios.get(`${HOST}/draft/displayDraft`);
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