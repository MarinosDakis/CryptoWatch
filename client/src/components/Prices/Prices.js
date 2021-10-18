import React from 'react';
import { Grid, Button, Container } from '@material-ui/core';
import bitcoin from "../../images/bitcoin.png";
import ethereum from "../../images/ethereum.png";
import DisplayComponent from './DisplayComponent';

export default function Prices() {

    // apis to use: https://www.coinapi.io/
      
    const getPrices = (e) => {
        console.log("price updated");
    }
      
    return (
        <Container>
            <Grid container justifyContent={"space-evenly"}>
                <Grid item sx={12}>
                    <Button variant="contained" onClick={getPrices}>Update Prices</Button>
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent={"space-evenly"}>
                <Grid item sx={4}>
                    <DisplayComponent companyName="CoinBase" buyPrice={"$60000"} sellPrice={"$50000"} imgSize="150px" img={bitcoin} title="Bitcoin" /> 
                </Grid>
                <Grid item sx={4}>
                    <DisplayComponent companyName="CoinBase" buyPrice={"$5000"} sellPrice={"$4000"} imgSize="150px" img={ethereum} title="Ethereum" /> 
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent={"space-evenly"}>
                <Grid item sx={6}>
                    <DisplayComponent companyName="Gemini" buyPrice={"$60050"} sellPrice={"$50050"} imgSize="150px" img={bitcoin} title="Bitcoin" /> 
                </Grid>
                <Grid item sx={6}>
                    <DisplayComponent companyName="Gemini" buyPrice={"$5050"} sellPrice={"$4050"} imgSize="150px" img={ethereum} title="Ethereum" /> 
                </Grid>
            </Grid>
        </Container>
    )
}
