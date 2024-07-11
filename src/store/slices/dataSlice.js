import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  data: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchData: (state, action) => {
      state.count = action.payload.total;
      state.data = [...action.payload.data];
    },
  },
});

export const { fetchData } = dataSlice.actions;
export default dataSlice.reducer;
