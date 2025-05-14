import { User } from '@/assets/data'
import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'

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
    const data = await fetch('http://localhost:3000/api/users');
    console.log("Data: ",data);
    return data;
  } catch (error) {
    console.log("Error: ",error);
    return error;
  }
})

export const addUser = createAsyncThunk('addUser',async(data)=>{
  try{
    const response = await fetch('http://localhost:3000/api/users',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const result = await response.json();
    console.log("Result: ",result);
    return result;
    
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
      })
      .addCase(addUser.pending, () => {  
        console.log("Pending");
      })
      .addCase(addUser.fulfilled, () => {
        console.log("Fulfilled");
      })
      .addCase(addUser.rejected, (state, action) => {
        console.log("Error: ",action.payload);
      })
  },
})

export const { } = userSlice.actions

export default userSlice.reducer