import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: {
    students: true,
    status: false,
    account: false,
  },
};

export const counterSlice = createSlice({
  name: "navegation",
  initialState,
  reducers: {
    setActive: (state, action) => {
      console.log(action.payload);
      state.active = { ...action.payload };
    },
  },
});

export const { setActive } = counterSlice.actions;

export default counterSlice.reducer;
