import { Button, Grid, Paper, TextField, Typography } from "@mui/material"
import React, {useState} from "react";
import { selectAll, transacionar } from "./store/conta/ContaSlice";
import { useAppSelector, useAppDispatch} from "./store/hooks";

const Home:React.FC = () => {

    const [valorDigitado, setValorDigitado] = useState<number>(0)
    
    const listaTransacoes = useAppSelector(selectAll);
    const dispatch = useAppDispatch();
    
    const saldo = listaTransacoes.reduce<number>((anterior, atual) => {
        return anterior + atual.valor
    },0);

    function handleDepositar() {
        dispatch(transacionar({
            id: Math.floor(Date.now() * Math.random()).toString(36),
            valor: valorDigitado,
        }))
    }

    function handleSacar() {
        dispatch(transacionar({
            id: Math.floor(Date.now() * Math.random()).toString(36),
            valor: valorDigitado*(-1),
        }
    ))}


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
                    
                    
                    <Typography variant="h5" component="h2">
                        {listaTransacoes.map((item) => 
                            <div>
                                {item.valor}
                            </div>
                        )}
                    </Typography>
                </ Grid>
                
            </ Grid>
        </>     
            )
}

export default Home