import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from './userService';
import { toast } from 'react-toastify';

const initialState = {
    user: null,
    users: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",

}


export const createUser = createAsyncThunk(
    "users/create",
    async (formData, thunkAPI) => {
        try {
            return await userService.createUser(formData)

        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);

        }
    }
)

const userSlide = createSlice({
    name: "user",
    initialState,
    reducers: {
        CALC_STORE_VALUE(state, action) {
            console.log("store Value");
        }
    },
    extraReducers: (builder) => {

        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                console.log(action.payload);
                state.users.push(action.payload);
                toast.success("User added successfully");

            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.error(action.payload);

            })



    }
});

export const { CALC_STORE_VALUE } = userSlide.actions
export const selectIsLoading = (state) => state.user.isLoading;

export default userSlide.reducer