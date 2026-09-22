import { http } from './http';

export const getAllCategories = async () => {
  const { data } = await http.get('/categories/all');
  return data;
};

export const getCategoryWithProducts = async (id) => {
  const { data } = await http.get(`/categories/${id}`);
  if (data?.status === 'ERR') {
    return { category: null, products: [] };
  }
  return { category: data.category, products: data.data };
};
