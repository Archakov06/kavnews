import { actionTypes } from '../actions/app';

const initialState = {
  region: 'ING',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_REGION:
      return {
        ...state,
        region: action.payload,
      };
    default:
      return state;
  }
}
