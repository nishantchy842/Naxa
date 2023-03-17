import { USER_FETCH_SUCCEEDED } from "./action";
;

const reducer = (state = {users:[]}, action) => {
  switch (action.type) {
    case USER_FETCH_SUCCEEDED:
      return { ...state, users: action.users };
    default:
      return state;
  }
};

export default reducer;