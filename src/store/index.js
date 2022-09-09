import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../features/cartSlice'
import gameSlice from '../features/gameSlice'
export const store = configureStore({
    reducer:{
        game:gameSlice,
        cart:cartSlice
    }
})