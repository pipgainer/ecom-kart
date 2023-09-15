import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

class ApiService {
    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: 'https://dummyjson.com',
            timeout: 5000,
        });
    }

    async fetchData<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.api.get(endpoint, {
                params,
            });
            return response.data;
        } catch (error: any) {
            this.handleApiError(error);
            throw error;
        }
    }

    private handleApiError(error: AxiosError) {
        if (error.response) {
            // The request was made, but the server responded with an error status code
            console.error('Response Error:', error.response.status, error.response.data);
        } else if (error.request) {
            // The request was made, but no response was received (e.g., network error)
            console.error('Request Error:', error.message);
        } else {
            // Something happened in setting up the request that triggered an error
            console.error('Error:', error.message);
        }
    }
}

export default new ApiService();
