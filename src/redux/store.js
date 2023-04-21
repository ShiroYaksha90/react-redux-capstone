import { configureStore } from '@reduxjs/toolkit'
import countriesReducer from './features/countriesSlice'

const store = configureStore({
    reducer: {
        country: countriesReducer,
    }
})

export default store