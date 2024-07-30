import axios from "axios";

const url = 'http://10.10.0.33/api/method/gettasksacquisitions'
export async function getData() {
    return await axios.get(url)
}