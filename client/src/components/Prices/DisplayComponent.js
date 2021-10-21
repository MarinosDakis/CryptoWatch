import React, { useState } from 'react';
import { Typography, Grid, Card, TextField, Zoom, Button } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import { InputAdornment } from '@material-ui/core';
//import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import useStyles from './styles';
import { priceList } from "./priceList";

export default function DisplayComponent() {

    const classes = useStyles();

    const getPrices = (e, apiName) => {
        console.log("price updated");
    }

    const [buyPrice, setbuyPrice] = useState("");
    const [sellPrice, setsellPrice] = useState("");

    return (
        <div>
            <Zoom in >
                <Grid container spacing={2} className={classes.container}>
                    {priceList.map((item, index) => (
                        <Grid item xs={12} sm={12} md={6} lg={6} align="center" className={classes.container} key={item.exchangeName}>
                            <div>
                                {item.cryptoName.map((currentCrypto, index) => (
                                    <Card variant="outlined" align="center" className={classes.card} key={item.exchangeName + " " + currentCrypto}>
                                        <a className={classes.url} href={item.url} target="_blank" rel="noreferrer">
                                            <CardMedia className={`${classes.img} ${classes.root}`} component="img" image={`${process.env.PUBLIC_URL + item.exchangeLogo}`} alt={item.exchangeName ? `${item.exchangeName}-logo` : "exchange-logo"} />
                                        </a>
                                        <Typography className={classes.root} variant="h4" gutterBottom align="center">
                                            {currentCrypto}
                                        </Typography>
                                        <Divider className={classes.root} />
                                        <CardContent>
                                            <Typography className={classes.textField} gutterBottom variant="h5" align="center"><strong>BUY</strong></Typography>
                                            <TextField InputProps={{ className: classes.input }} className={classes.root} readOnly variant="outlined" value={buyPrice === "" ? "Error" : buyPrice}></TextField>
                                            <Typography className={classes.textField} gutterBottom variant="h5" align="center"><strong>SELL</strong></Typography>
                                            <TextField InputProps={{ className: classes.input }} readOnly variant="outlined" value={sellPrice === "" ? "Error" : sellPrice}></TextField>
                                        </CardContent>
                                        <Typography variant="caption">Source: {item.apiName}</Typography>
                                    </Card>
                                ))}
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Zoom >
        </div>
    )
}