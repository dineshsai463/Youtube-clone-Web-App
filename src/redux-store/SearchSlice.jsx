import { createSlice } from "@reduxjs/toolkit";

export  const SearchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export default SearchSlice.reducer;
export const { cacheResults } = SearchSlice.actions;
