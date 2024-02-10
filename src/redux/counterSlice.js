import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    icnrementByAmount: (state, action) => {
      state.value += action.payload; // 2, 10, 100
    }
  }
})

export const { increment, decrement, icnrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;