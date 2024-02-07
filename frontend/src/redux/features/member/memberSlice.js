import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import memberService from "./memberService";
import {toast} from "react-toastify"

const initialState = {
    member: null,
    members:[],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",


}

export const createMember = createAsyncThunk(
    "user/create",
    async (formData, thunkAPI) => {
      try {
        return await memberService.createMember(formData);
  
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(message);
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    CALC_STORE_VALUE(state,action){
        console.log("Store value")
    }
  },

  extraReducers:(builder) => {
builder
.addCase(createMember.pending, (state) => {
    state.isLoading = true;
  })
  .addCase(createMember.fulfilled, (state, action) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.isError = false;
     console.log(action.payload);
    state.members.push(action.payload);
    toast.success("Member added successfully");
  })
  .addCase(createMember.rejected, (state, action) => {
    state.isLoading = false;
    state.isError = true;
    state.message = action.payload;
    toast.error(action.payload);
  })
  }
});

export const {CALC_STORE_VALUE} = memberSlice.actions

export default memberSlice.reducer