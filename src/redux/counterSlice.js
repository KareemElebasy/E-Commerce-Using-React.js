import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};


export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {

    increaceCount: (state, action) => {
        console.log(action)
      state.counter = state.counter+action.payload;
    },

    descreaseCount: (state, action) => {
        if (state.counter > 0){
            state.counter = state.counter-action.payload
        }
        else if ( state.counter = 0){
            state.counter =0
        }
    },
  },
});


export const { increaceCount,descreaseCount } = counterSlice.actions;