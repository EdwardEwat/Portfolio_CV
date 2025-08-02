import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_PORT = import.meta.env.VITE_API_PORT;

export const fetchCompanies = createAsyncThunk(
  "experience/fetchCompanies",
  async () => {
    try {
      const response = await axios.get(`${API_URL}:${API_PORT}/cong-ty`);
      return response.data;
    } catch (error) {
      throw new Error(
        "Failed to fetch companies from the server: " + error.message
      );
    }
  }
);

export const fetchJobs = createAsyncThunk("experience/fetchJobs", async () => {
  try {
    const response = await axios.get(`${API_URL}:${API_PORT}/cong-viec`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch jobs: ` + error.message);
  }
});

export const fetchJobProjects = createAsyncThunk(
  "experience/fetchJobProjects",
  async () => {
    try {
      const response = await axios.get(`${API_URL}:${API_PORT}/du-an-cong-ty`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch job projects: ` + error.message);
    }
  }
);

const experienceSlice = createSlice({
  name: "experience",
  initialState: {
    companies: [],
    jobs: [],
    jobProjects: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.companies = action.payload;
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchJobProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.jobProjects = action.payload;
      })
      .addCase(fetchJobProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default experienceSlice.reducer;
