const UserReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};
export default UserReducer;
