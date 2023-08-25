import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const FETCH_ACTION = 'user/fetchUsers'

export const fetchUsers = createAsyncThunk(
  FETCH_ACTION,
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users/1/', // interna de auth
      )
      console.log(response)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  },
)

const slice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    isFetching: false,
    data: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.data = {}
      state.isFetching = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.data = payload
      state.isLoggedIn = true
      state.isFetching = false
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.data = {}
      state.isLoggedIn = false
      state.isFetching = false
    })
  },
})

export default slice.reducer
