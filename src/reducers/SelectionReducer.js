import { SELECT_LIBRARY } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_LIBRARY:
        return action.payload;
    default:
        return state;
  }
};
