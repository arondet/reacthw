import { http } from './http';

export const sendOrder = async ({ name, phone, email, products }) => {
  const { data } = await http.post('/order/send', { name, phone, email, products });
  return data;
};
