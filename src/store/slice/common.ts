import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ITFDataTableUser } from "types/management.types";

export interface commonStage {
  loading: boolean;
  dataUser: ITFDataTableUser | undefined;
}

const initialValues: commonStage = {
  loading: false,
  dataUser: undefined,
};

const commonSlice = createSlice({
  name: "common",
  initialState: initialValues,
  reducers: {
    setLoading: (state: commonStage, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setDataUser: (
      state: commonStage,
      action: PayloadAction<ITFDataTableUser | undefined>
    ) => {
      state.dataUser = action.payload;
    },
  },
});

export const { setLoading, setDataUser } = commonSlice.actions;
export const commonSelector = (store: RootState) => store.common;

export default commonSlice.reducer;
