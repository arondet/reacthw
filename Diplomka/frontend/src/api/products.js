import { http } from './http';

export const getAllProducts = async () => {
  const { data } = await http.get('/products/all');
  return data;
};

export const getProductById = async (id) => {
  const { data } = await http.get(`/products/${id}`);
  if (data?.status === 'ERR' || !Array.isArray(data) || data.length === 0) {
    return null;
  }
  return data[0];
};
