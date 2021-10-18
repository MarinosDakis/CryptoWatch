import React from 'react';
import { Grid, Button, Container } from '@material-ui/core';
import bitcoin from "../../images/bitcoin.png";
import ethereum from "../../images/ethereum.png";
import DisplayComponent from './DisplayComponent';

import useStyles from './styles';

export default function Prices() {

    const classes = useStyles();

    // apis to use: https://www.coinapi.io/
      
    const getPrices = (e) => {
        console.log("price updated");
    }
      
    return (
        <Container>
            <Grid container justifyContent={"space-evenly"}>
                <Grid item>
                    <Button className={classes.button} variant="contained" onClick={getPrices}><strong>Update Prices</strong></Button>
                </Grid>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Grid item xs={12} sm={6} md={6}>
                    <DisplayComponent companyName="CoinBase" buyPrice={"$60000"} sellPrice={"$50000"} img={bitcoin} title="Bitcoin" /> 
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <DisplayComponent companyName="CoinBase" buyPrice={"$5000"} sellPrice={"$4000"} img={ethereum} title="Ethereum" /> 
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <DisplayComponent companyName="Gemini" buyPrice={"$60050"} sellPrice={"$50050"} img={bitcoin} title="Bitcoin" /> 
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <DisplayComponent companyName="Gemini" buyPrice={"$5050"} sellPrice={"$4050"} img={ethereum} title="Ethereum" /> 
                </Grid>
            </Grid>
        </Container>
    )
}
