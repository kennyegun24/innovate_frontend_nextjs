import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isFetching: true,
  userDetails: {},
  pending: false,
  detailsError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.detailsError = true;
    },
    dispatchUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    getUserErrorStatus: (state, action) => {
      state.detailsError = action.payload.error;
    },
    resetUserDetails: () => initialState,
  },
  extraReducers(reduce) {},
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  dispatchUserDetails,
  resetUserDetails,
  getUserErrorStatus,
} = userSlice.actions;
export default userSlice.reducer;
