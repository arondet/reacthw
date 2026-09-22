import { http } from './http';

export const sendDiscountRequest = async ({ name, phone, email }) => {
  const { data } = await http.post('/sale/send', { name, phone, email });
  return data;
};
