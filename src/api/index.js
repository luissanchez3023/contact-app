import axios from "axios";

const instance = axios.create({
    baseURL: 'https://randomuser.me/api/',
    timeout: 25000,
    headers: {
        'Content-Type': 'application/json'
      }
})

export default instance