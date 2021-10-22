import React, { useState, useEffect } from 'react';
import { Typography, Grid, Card, TextField, Zoom } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import useStyles from './styles';
import { priceList } from "./priceList";

import { useDispatch } from 'react-redux';
import { fetchPrices } from '../../actions/crypto';
//import axios from 'axios';

export default function DisplayComponent() {

    const classes = useStyles();
    const dispatch = useDispatch();

    const [buyPrices, setBuyPrices] = useState({ krakenBTC: "", krakenETH: "", coinBaseBTC: "", coinBaseETH: "" })
    const [sellPrices, setSellPrices] = useState({ krakenBTC: "", krakenETH: "", coinBaseBTC: "", coinBaseETH: "" })

    useEffect(() => { 

        let interval = setInterval(() => {

            dispatch(fetchPrices()).then(prices => {

                // clean up to prevent memory leak
                // adapted from: https://stackoverflow.com/questions/54954385/react-useeffect-causing-cant-perform-a-react-state-update-on-an-unmounted-comp
                setBuyPrices({ krakenBTC: "", krakenETH: "", coinBaseBTC: "", coinBaseETH: "" });
                setSellPrices({ krakenBTC: "", krakenETH: "", coinBaseBTC: "", coinBaseETH: "" });

                setBuyPrices({krakenBTC: "$" + prices.kraken_BTC_BUY,
                             krakenETH: "$" + prices.kraken_ETH_BUY,
                             coinBaseBTC: "$" + prices.coinBase_BTC_BUY,
                             coinBaseETH: "$" + prices.coinBase_ETH_BUY,
                            });

                setSellPrices({krakenBTC: "$" + prices.kraken_BTC_SELL,
                    krakenETH: "$" + prices.kraken_ETH_SELL,
                    coinBaseBTC: "$" + prices.coinBase_BTC_SELL,
                    coinBaseETH: "$" + prices.coinBase_ETH_SELL,
                   });

            }).catch((err) => {
                console.log(err);
            })
        }, 3000);

        // adapted from: https://stackoverflow.com/questions/65049812/how-to-call-a-function-every-minute-in-a-react-component
        return () => clearInterval(interval);

    }, [dispatch]);

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
                                            <TextField
                                                InputProps={{ className: classes.input }}
                                                className={classes.root}
                                                readOnly
                                                variant="outlined"
                                                value={item.exchangeName === "Coinbase" && currentCrypto === "Bitcoin (BTC)" ? buyPrices.coinBaseBTC :
                                                    item.exchangeName === "Coinbase" && currentCrypto === "Ethereum (ETH)" ? buyPrices.coinBaseETH :
                                                        item.exchangeName === "Kraken" && currentCrypto === "Bitcoin (BTC)" ? buyPrices.krakenBTC :
                                                            item.exchangeName === "Kraken" && currentCrypto === "Ethereum (ETH)" ? buyPrices.krakenETH :
                                                                "Error"}>
                                            </TextField>
                                            <Typography className={classes.textField} gutterBottom variant="h5" align="center"><strong>SELL</strong></Typography>
                                            <TextField
                                                InputProps={{ className: classes.input }}
                                                className={classes.root}
                                                readOnly
                                                variant="outlined"
                                                value={item.exchangeName === "Coinbase" && currentCrypto === "Bitcoin (BTC)" ? sellPrices.coinBaseBTC :
                                                    item.exchangeName === "Coinbase" && currentCrypto === "Ethereum (ETH)" ? sellPrices.coinBaseETH :
                                                        item.exchangeName === "Kraken" && currentCrypto === "Bitcoin (BTC)" ? sellPrices.krakenBTC :
                                                            item.exchangeName === "Kraken" && currentCrypto === "Ethereum (ETH)" ? sellPrices.krakenETH :
                                                                "Error"}>
                                            </TextField>                                        </CardContent>
                                        <Typography variant="caption">Powered by: {item.apiName}</Typography>
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