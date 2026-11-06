import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './slicesUtils/cartSlice'

const appStore = configureStore({
    reducer:{
        cart:cartReducer,
    }
});
export default appStore;