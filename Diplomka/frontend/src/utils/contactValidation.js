export const nameRule = { required: 'Укажите имя' };

export const phoneRule = {
  required: 'Укажите телефон',
  pattern: { value: /^[+\d][\d\s()-]{6,}$/, message: 'Неверный формат телефона' },
};

export const emailRule = {
  required: 'Укажите email',
  pattern: { value: /^\S+@\S+\.\S+$/, message: 'Неверный формат email' },
};
