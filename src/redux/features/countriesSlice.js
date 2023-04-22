import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCountries = createAsyncThunk("countries/getCountries", async (_,thunkAPI)=> {
    try{
        const response = await fetch('https://restcountries.com/v3.1/all')
        const data = response.json();
    return data;
    }catch(error){
        const message = ( Promise.reject(error))
        return thunkAPI.rejectWithValue(message)
    }
})

export const search = createAsyncThunk("countries/search", async(code,thunkAPI)=>{
    try{
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        const data = response.json();
        return data
    }catch(error){
        const message = ( Promise.reject(error))
        return thunkAPI.rejectWithValue(message)
    }
})

export const searachByRegion = createAsyncThunk("countries/searchByRegion", async (region,thunkAPI)=>{
    try{
        const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
        const data = response.json();
        return data
    }catch(error){
        const message = ( Promise.reject(error))
        return thunkAPI.rejectWithValue(message)
    }
})

const initialState = {
    loading: false,
    countriesArray: [],
    countryInfo: [],
    region:'',
    error: false,
    success: false
}

const countriesSlice = createSlice({
    name: 'countries',
    initialState: initialState,
    reducers: {
        getRegion: (state,action) =>{
            state.region = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCountries.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getCountries.fulfilled, (state,action)=>{
            state.loading= false;
            state.countriesArray= action.payload;
            state.success = true;
        })
        .addCase(getCountries.rejected, (state, action)=>{
            state.loading = false;
            state.error = true;
            state.message = action.payload;
            state.countriesArray =[];
        })
        .addCase(search.pending, (state)=>{
            state.loading =true;
        })
        .addCase(search.fulfilled, (state,action)=>{
            state.loading =false;
            state.countryInfo = action.payload;
            state.error=false;
            state.success=true;
        })
        .addCase(search.rejected, (state, action)=> {
            state.loading=false;
            state.error=true;
            state.message=action.payload;
            state.countryInfo=[];
        })
        .addCase(searachByRegion.pending,(state)=>{
            state.loading=true;
        })
        .addCase(searachByRegion.fulfilled,(state,action)=>{
            state.loading=false;
            state.countriesArray=action.payload
            state.success=true;
        })
        .addCase(searachByRegion.rejected,(state,action)=>{
            state.loading=false;
            state.error=true;
            state.message=action.payload;
        })
    },
})

export const { getRegion } = countriesSlice.actions
export default countriesSlice.reducer;