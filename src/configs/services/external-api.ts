import axios from 'axios';

const externalApi = axios.create({
	baseURL: import.meta.env.VITE_EXTERNAL_API_URL,
});

export default externalApi;
