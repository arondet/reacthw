import axios from 'axios';

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3333';

export const http = axios.create({
  baseURL: API_URL,
});

export const imageUrl = (path) => (path ? `${API_URL}${path}` : '');
