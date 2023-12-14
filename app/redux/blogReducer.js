import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { unauthRailsRequest } from "../utils/publicRequest";

export const fetchBlogArticle = createAsyncThunk("article/all", async () => {
  console.log("fetch");
  const req = unauthRailsRequest.get("/blogs");
  const res = (await req).data;
  const data = await res?.data;
  return data;
});

const articleSlice = createSlice({
  name: "articleSlice",
  initialState: {
    loading: true,
    articles: [],
    error: false,
  },
  reducers: {},
  extraReducers(reducer) {
    reducer
      .addCase(fetchBlogArticle.pending, (state) => {
        const status = state;
        status.loading = true;
      })
      .addCase(fetchBlogArticle.fulfilled, (state, action) => {
        const status = state;
        status.loading = false;
        status.articles = action.payload;
      })
      .addCase(fetchBlogArticle.rejected, (state) => {
        const status = state;
        status.loading = false;
        status.error = true;
      });
  },
});

export default articleSlice.reducer;
