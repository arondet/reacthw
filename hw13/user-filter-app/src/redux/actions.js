export const SET_FILTER = 'SET_FILTER';

export function setFilter(filterText) {
  return {
    type: SET_FILTER,
    payload: filterText,
  };
}