export const USER_FETCH_REQUESTED = "FETCH_USERS_REQUEST";
export const USER_FETCH_SUCCEEDED = "USER_FETCH_SUCCEEDED";

export const fetchUsers = () => ({
    type: USER_FETCH_REQUESTED,
  });