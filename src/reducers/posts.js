const initialState = {
  items: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        items: action.payload,
      };
    case 'REMOVE_POST':
      return {
        ...state,
      };
    default:
      return state;
  }
}
