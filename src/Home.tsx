import { Button, Grid, Paper, TextField, Typography } from "@mui/material"
import React, {useState} from "react";
import { depositar, sacar, selectSaldo } from "./store/conta/ContaSlice";
import { useAppSelector, useAppDispatch} from "./store/hooks";

const Home:React.FC = () => {

    const [valorDigitado, setValorDigitado] = useState<number>(0)
    
    const saldo = useAppSelector(selectSaldo);
    const dispatch = useAppDispatch();

    function handleDepositar() {
        dispatch(depositar(valorDigitado))
    }

    function handleSacar() {
        dispatch(sacar(valorDigitado))
    }


    return(   
        <> 
            <Grid container spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '80vh' }} >
                
                <Grid item xs={12}>
                    <Paper elevation={3}>

                        <TextField id="outlined-basic" label="Digite um valor" variant="outlined" value={valorDigitado} onChange={(e) => setValorDigitado(Number(e.target.value))}  />
                        
                        <Button variant="contained" onClick={handleDepositar}>Depositar</Button>
                        <Button variant="contained" onClick={handleSacar}>Sacar</Button>
                        
                        <Typography variant="h5" component="h2">
                            {saldo}
                        </Typography>
                        
                    </Paper>

                    <span>{valorDigitado}</span>

                </ Grid>
                
            </ Grid>
        </>     
            )
}

export default Home