import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState: number = 0;

const contaSlice = createSlice({
    name: "conta",
    initialState: initialState,
    reducers: {
        depositar: (state, action: PayloadAction<number>) => state + action.payload,
        sacar: (state, action: PayloadAction<number>) => state - action.payload,
    },
})

export const {depositar, sacar} = contaSlice.actions;

export const selectSaldo = (state: RootState) => state.conta

export default contaSlice.reducer;