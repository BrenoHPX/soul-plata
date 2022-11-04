import { createEntityAdapter, createSlice} from "@reduxjs/toolkit";

export type Transacao = {
    id: string;
    valor: number;
}

const adapter = createEntityAdapter<Transacao> ({
    selectId: (valor) => valor.id,
});

export const { selectAll } = adapter.getSelectors((state: any) => state.conta);

const contaSlice = createSlice({
    name: "conta",
    initialState: adapter.getInitialState(),
    reducers: {
        transacionar: adapter.addOne,
    },
})

export const {transacionar} = contaSlice.actions;

export default contaSlice.reducer;