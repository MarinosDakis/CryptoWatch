import React from 'react'
import { Grid } from '@material-ui/core';
import bitcoin from "../../images/bitcoin.png";
import ethereum from "../../images/ethereum.png";

import DisplayComponent from './DisplayComponent';

export default function Prices() {

    return (
        <Grid container spacing={2} justifyContent={"space-evenly"}>
            <Grid item sx={6}>
                <DisplayComponent buyPrice={"$60000"} sellPrice={"$50000"} imgSize="150px" img={bitcoin} title="Bitcoin" /> 
            </Grid>
            <Grid item sx={6}>
                <DisplayComponent buyPrice={"$5000"} sellPrice={"$4000"} imgSize="150px" img={ethereum} title="Ethereum" /> 
            </Grid>
        </Grid>
    )
}
