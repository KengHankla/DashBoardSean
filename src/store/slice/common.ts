import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface commonStage {
  loading: boolean;
}

const initialValues: commonStage = {
  loading: false,
};

const commonSlice = createSlice({
  name: "common",
  initialState: initialValues,
  reducers: {
    setLoading: (state: commonStage, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = commonSlice.actions;
export const commonSelector = (store: RootState) => store.common;

export default commonSlice.reducer;
