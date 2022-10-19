import {configureStore} from '@reduxjs/toolkit' ;
import { counterSlice } from './counterSlice';
import {cartSlice} from './cartSlice'

console.log(counterSlice)

export const store = configureStore({
    reducer : {
        counterStore :counterSlice.reducer,
        
        cart :cartSlice.reducer
    }
})