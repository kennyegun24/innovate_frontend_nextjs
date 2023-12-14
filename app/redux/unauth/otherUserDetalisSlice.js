import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUnauthOtherUserDetails = createAsyncThunk(
  "fetch/unauth/postDetails",
  async (id) => {
    const req = await fetch(
      `http://localhost:4000/api/v1/unauth/user_details/${id}`,
      { next: { revalidate: 60 } }
    );
    const res = await req.json();
    const userDetails = await res.data;
    return await userDetails;
  }
);

const unauthOtherUserDetails = createSlice({
  name: "PostDetailsSlice",
  initialState: {
    details: {},
    error: false,
    loading: true,
  },
  reducers: {
    getDetails: (state, action) => {
      state.details = action.payload;
      state.loading = false;
    },
  },
  extraReducers(reducers) {
    reducers
      .addCase(fetchUnauthOtherUserDetails.pending, (state, action) => {
        const isFetching = state;
        isFetching.loading = true;
        isFetching.details = {};
      })
      .addCase(fetchUnauthOtherUserDetails.fulfilled, (state, action) => {
        const isFetching = state;
        isFetching.loading = false;
        isFetching.details = action.payload;
      })
      .addCase(fetchUnauthOtherUserDetails.rejected, (state, action) => {
        const isFetching = state;
        isFetching.loading = false;
        isFetching.error = true;
        isFetching.details = {};
      });
  },
});

export const { getDetails } = unauthOtherUserDetails.actions;
export default unauthOtherUserDetails.reducer;
