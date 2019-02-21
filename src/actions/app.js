export const actionTypes = {
  SET_REGION: 'set posts region',
};

export const appActions = {
  setRegion: region => ({
    type: actionTypes.SET_REGION,
    payload: region,
  }),
};
