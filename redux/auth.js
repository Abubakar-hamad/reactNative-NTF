import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    user:'',
    isSuccess:false , 
    isLoading:false ,
    isError:false,
    message:''
}

export const LoginRedux  = createAsyncThunk('auth/login' , async(user , thunkAPI)=>{
    try {
        const res = await axios.post('http://192.168.43.99:5000/auth/login' , user)
        return res.data
    } catch (error) {
        const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const authSlice = createSlice({
    name:'auth' ,
    initialState ,
    reducers:{
        reset:()=> initialState
    },
    extraReducers:(builder)=>{
        builder
        .addCase(LoginRedux.pending , (state)=>{
            state.isLoading = true ;
        })
        .addCase(LoginRedux.fulfilled , (state , action)=>{
            state.isLoading=false ;
            state.isSuccess= true;
            state.user = action.payload
        })
        .addCase(LoginRedux.rejected , (state , action)=>{
            state.isLoading= false;
            state.isError = true;
            state.message = action.payload;
            state.user = '';

        })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer