import {createSlice} from '@reduxjs/toolkit'

const initialState= {
    cartGames:[]
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCartGames:(state,action) => {
            state.cartGames.push(action.payload)
        },
        removeCartGames:(state,action) => {
            state.cartGames=state.cartGames.filter((item)=>item.id!==action.payload)
        }
    }

})

export const {addCartGames,removeCartGames} = cartSlice.actions
export default cartSlice.reducer