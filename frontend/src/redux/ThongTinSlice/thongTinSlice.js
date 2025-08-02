import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_PORT = import.meta.env.VITE_API_PORT;

export const getThongTin = createAsyncThunk(
  "thongTin/getThongTin",
  async () => {
    const res = await axios.get(`${API_URL}:${API_PORT}/thong-tin`);
    return res.data;
  }
);

export const sendMail = createAsyncThunk(
  "thongTin/sendMail",
  async (data, { rejectWithValue }) => {
    try {
      console.log("Sending mail with data:", data);
      const res = await axios.post(
        `${API_URL}:${API_PORT}/thong-tin/send-mail`,
        data
      );
      console.log("Response from sendMail:", res.data);
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const thongTinSlice = createSlice({
  name: "thongTin",
  initialState: {
    loading: false,
    thongTin: [],
    error: null,
    mailStatus: "idle", 
    mailError: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getThongTin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getThongTin.fulfilled, (state, action) => {
        state.loading = false;
        state.thongTin = action.payload;
      })
      .addCase(getThongTin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(sendMail.pending, (state) => {
        state.mailStatus = "loading";
        state.mailError = null;
      })
      .addCase(sendMail.fulfilled, (state) => {
        state.mailStatus = "succeeded";
      })
      .addCase(sendMail.rejected, (state, action) => {
        state.mailStatus = "failed";
        state.mailError = action.payload?.message || "Failed to send email";
      });
  },
});

export default thongTinSlice.reducer;
