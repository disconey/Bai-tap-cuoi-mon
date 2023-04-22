import { configureStore } from '@reduxjs/toolkit';
import productCardReducer from '../features/ProductCard/productCardSlice'

const store = configureStore({
    reducer: {
        producter: productCardReducer,
    }
})

export default store;