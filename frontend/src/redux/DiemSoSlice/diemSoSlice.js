import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_API_URL;
const API_PORT = import.meta.env.VITE_API_PORT;

export const getDiemSo = createAsyncThunk(
  "diemSo/getDiemSo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}:${API_PORT}/diem-so`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
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

export const getDiemSo1Ky = createAsyncThunk(
  "diemSo/getDiemSo1Ky",
  async (hocKy, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${API_URL}:${API_PORT}/diem-so/hoc-ky/${hocKy}}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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

const diemSoSlice = createSlice({
  name: "diemSo",
  initialState: {
    loading: false,
    diemSo: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDiemSo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDiemSo.fulfilled, (state, action) => {
        state.loading = false;
        state.diemSo = action.payload;
      })
      .addCase(getDiemSo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { actions, reducer } = diemSoSlice;
export default diemSoSlice.reducer;
