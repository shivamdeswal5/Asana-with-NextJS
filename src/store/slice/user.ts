import { User } from '@/assets/data'
import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios'
   type User = {
        id: string
        name: string
        email: string
        password: string
        confirmPassword: string
        organization: string
        role: string
        isTeamLead: boolean
        projects: []
        tasks: []
    }

const initialState = {
  isLoading: false,
  isError: false,
  users: [] as User[],
  
}

export const getUsers = createAsyncThunk('getUsers',async()=>{
  try{
    const data = await axios.get('http://localhost:3000/api/users');
    console.log("Data: ",data);
    return data;
  } catch (error) {
    console.log("Error: ",error);
    return error;
  }
})

export const addUser = createAsyncThunk('addUser',async(data)=>{
  try{
    const response = await axios.post('http://localhost:3000/api/users',data);
    console.log("Response: ",response);
    return response;
  }catch (error) {
    console.log("Error: ",error);
    return error;
  }
})



export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        console.log("Pending");
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        console.log("Fulfilled");
        state.isLoading = false;
        state.users.push(action.payload);
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.log("Error: ",action.payload);
      });
  },
})

export const { } = userSlice.actions

export default userSlice.reducer