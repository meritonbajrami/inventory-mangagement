import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectService: "Data Grid",
  data: [],
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setSelectedService: (state, action) => {
      state.selectService = action.payload;
    },
    setServiceData: (state, action) => {
      state.data = action.payload;
    },
    updateServiceData: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.nr === action.payload.nr
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
  },
});

export const selectServiceData = (state) => state.service.data;
export const selectService = (state) => state.service.selectService;
export const { setSelectedService, setServiceData, updateServiceData } =
  serviceSlice.actions;
export default serviceSlice.reducer;
