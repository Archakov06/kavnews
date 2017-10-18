const initialState = {
  region: 'ING',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_REGION':
      return {
        ...state,
        region: action.payload,
      };
    default:
      return state;
  }
}
