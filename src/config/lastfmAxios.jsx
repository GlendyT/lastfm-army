import axios from "axios";

const lastfmAxios = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}/api`
})

export default lastfmAxios;