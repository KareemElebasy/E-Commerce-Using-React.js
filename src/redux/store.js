import {configureStore} from '@reduxjs/toolkit' ;
import { counterSlice } from './counterSlice';


console.log(counterSlice)

export const store = configureStore({
    reducer : {
        counterStore :counterSlice.reducer
    }
})