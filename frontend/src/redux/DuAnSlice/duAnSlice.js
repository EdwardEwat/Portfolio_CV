import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_API_URL;
const API_PORT = import.meta.env.VITE_API_PORT;

export const fetchDuAn = createAsyncThunk(
  "duAn/fetchDuAn",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/du-an-cua-toi`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const duAnSlice = createSlice({
  name: "duAn",
  initialState: {
    duAn: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDuAn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDuAn.fulfilled, (state, action) => {
        state.loading = false;
        state.duAn = action.payload;
      })
      .addCase(fetchDuAn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default duAnSlice.reducer;
