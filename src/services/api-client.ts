import axios from "axios";
export default axios.create({

    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0836106580e64659bf1f9f67ba09f14a'
    }
})