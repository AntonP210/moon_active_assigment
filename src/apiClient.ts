import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://petstore.swagger.io'; 




/**
 * Function to perform a GET request
 * @param endpoint - The API endpoint
 * @returns Promise<AxiosResponse<any>>
 */
export const auth = (): Promise<AxiosResponse> => {
  return axios.post(`${BASE_URL}/oauth/authorize`,{"Value":"special-key"});
};

/**
 * Function to perform a GET request
 * @param endpoint - The API endpoint
 * @returns Promise<AxiosResponse<any>>
 */
export const get = (endpoint: string): Promise<AxiosResponse> => {
  return axios.get(`${BASE_URL}${endpoint}`);
};

/**
 * Function to perform a POST request
 * @param endpoint - The API endpoint
 * @param data - The data to post
 * @returns Promise<AxiosResponse<any>>
 */
export const post = (endpoint: string, data: any): Promise<AxiosResponse> => {
  return axios.post(`${BASE_URL}${endpoint}`, data);
};

/**
 * Function to perform a PUT request
 * @param endpoint - The API endpoint
 * @param data - The data to put
 * @returns Promise<AxiosResponse<any>>
 */
export const put = (endpoint: string, data: any): Promise<AxiosResponse> => {
  return axios.put(`${BASE_URL}${endpoint}`, data);
};

/**
 * Function to perform a DELETE request
 * @param endpoint - The API endpoint
 * @returns Promise<AxiosResponse<any>>
 */
export const del = (endpoint: string): Promise<AxiosResponse> => {
  return axios.delete(`${BASE_URL}${endpoint}`);
};
