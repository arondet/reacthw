import { SET_FILTER } from './actions';

const initialState = {
  users: [
    { id: 1, name: 'Иван Петров' },
    { id: 2, name: 'Мария Смирнова' },
    { id: 3, name: 'Алексей Кузнецов' },
    { id: 4, name: 'Дарья Иванова' },
    { id: 5, name: 'Сергей Волков' },
  ],
  filter: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;