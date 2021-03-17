import axios from 'axios';

export const httpTransport = axios.create({
    baseURL: 'https://wookie.codesubmit.io',
});
httpTransport.defaults.headers.common["Authorization"] = "Bearer Wookie2019";