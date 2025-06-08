import axios from 'axios'

const baseUrl = axios.create({ baseURL: "https://studentguideapi.runasp.net/" })

export default baseUrl


