import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getPost = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createPost = async (data: any) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const updatePost = async (id: number, data: any) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

export const deletePost = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};
