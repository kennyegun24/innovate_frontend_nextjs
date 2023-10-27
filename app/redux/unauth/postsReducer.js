import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUnauthUserPost = createAsyncThunk(
  "fetch/unauth/postDetails",
  async ({ id }) => {
    try {
      const req = await fetch(
        `http://localhost:4000/api/v1/unauth/posts/${id}`,
        { cache: "force-cache", next: { revalidate: 60 } }
      );
      const res = await req.json();
      const posts = await res.data;
      return posts;
    } catch (error) {}
  }
);

const unauthPostDetailsDetails = createSlice({
  name: "PostDetailsSlice",
  initialState: {
    post: {},
    error: false,
    loading: true,
  },
  reducers: {},
  extraReducers(reducers) {
    reducers
      .addCase(fetchUnauthUserPost.pending, (state, action) => {
        const isFetching = state;
        isFetching.loading = true;
      })
      .addCase(fetchUnauthUserPost.fulfilled, (state, action) => {
        const isFetching = state;
        isFetching.loading = false;
        isFetching.post = action.payload;
      })
      .addCase(fetchUnauthUserPost.rejected, (state, action) => {
        const isFetching = state;
        isFetching.loading = false;
        isFetching.error = true;
      });
  },
});

export default unauthPostDetailsDetails.reducer;
