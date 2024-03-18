import { createSlice } from "@reduxjs/toolkit";
import jobsites from "../../data/jobsites.json";
const initialState = {
  jobsites,
};

export const jobSiteSlice = createSlice({
  name: "jobsites",
  initialState,
  reducers: {
    addJobSites: (state, action) => {
      state.jobsites.unshift(action.payload);
    },
  },
});

export const selectJobsites = (state) => state.jobsites.jobsites;
export const { addJobSites } = jobSiteSlice.actions;
export default jobSiteSlice.reducer;
