import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUnauthOtherUserDetails = createAsyncThunk(
  "fetch/unauth/postDetails",
  async (id) => {
    try {
      const req = await fetch(
        `http://localhost:4000/api/v1/unauth/user_details/${id}`,
        { next: { revalidate: 60 } }
      );
      const res = await req.json();
      const userDetails = await res.data;
      console.log(userDetails);
      return await userDetails;
    } catch (error) {}
  }
);

export const fetchOtherUserExperience = createAsyncThunk(
  "fetch/unauth/postDetails",
  async (id) => {
    try {
      const req = await fetch(
        `http://localhost:4000/api/v1/user/${id}/experience`,
        { next: { revalidate: 60 } }
      );
      const res = await req.json();
      const userDetails = await res.data;
      console.log(userDetails);
      return await userDetails;
    } catch (error) {}
  }
);

const unauthOtherUserDetails = createSlice({
  name: "PostDetailsSlice",
  initialState: {
    details: {},
    error: false,
    loading: true,
    experience: [],
    education: [],
  },
  reducers: {},
  extraReducers(reducers) {
    reducers
      .addCase(fetchUnauthOtherUserDetails.pending, (state, action) => {
        const isFetching = state;
        isFetching.loading = true;
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
      });
  },
});

export default unauthOtherUserDetails.reducer;
