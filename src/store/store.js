import { configureStore } from "@reduxjs/toolkit";
import jobSiteReducer from "./features/jobSiteSlice";
import serviceReducer from "./features/serviceSlice";
export const store = configureStore({
  reducer: {
    jobsites: jobSiteReducer,
    service: serviceReducer,
  },
});
