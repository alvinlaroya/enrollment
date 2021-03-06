/* import apiClient from '../' */
import axios from 'axios';

const apiUrl = 'http://127.0.0.1:8000/api'

export default {
    async getClearanceEvent() {
        return await axios.get(`${apiUrl}/clearance/getClearances`,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        })
    },

    async addClearanceEvent(payload) {
        return await axios.post(`${apiUrl}/clearance/addClearance`, payload, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        })
    },
}
