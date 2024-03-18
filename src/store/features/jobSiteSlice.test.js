import { configureStore } from "@reduxjs/toolkit";
import jobSiteReducer, { addJobSites, selectJobsites } from "./jobSiteSlice";

describe("jobSiteSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { jobsites: jobSiteReducer } });
  });

  test("should handle initial state", () => {
    expect(selectJobsites(store.getState())).toEqual(
      expect.arrayContaining([])
    );
  });

  test("should handle addJobSites", () => {
    const newJobSite = { id: "3", name: "New JobSite" };

    store.dispatch(addJobSites(newJobSite));

    const jobSites = selectJobsites(store.getState());
    expect(jobSites).toEqual(expect.arrayContaining([newJobSite]));
    expect(jobSites[0]).toEqual(newJobSite);
  });
});
