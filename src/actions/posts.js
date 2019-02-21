export const actionTypes = {
  SET_POSTS: 'set posts',
};

export const postsActions = {
  setPosts: items => ({
    type: actionTypes.SET_POSTS,
    payload: items,
  }),
};
