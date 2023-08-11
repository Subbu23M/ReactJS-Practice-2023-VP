import { createSlice } from "@reduxjs/toolkit"

// 1)Maintaining state
const initialStateValue = {
    count : 0
}

// 2)creating slice
const counterSlice = createSlice({
    name:'counter',
    initialState:initialStateValue,
    reducers:{
        increment : (state) => {
            state.count +=1
        },
        decrement : (state) => {
            state.count -=1
        },
        incrementBy : (state,action) => {
            state.count += action.payload
        }
    }
})

// exporting actions
export const {increment,decrement,incrementBy} = counterSlice.actions

// exporting reducer
export default counterSlice.reducer