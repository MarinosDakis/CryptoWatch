import React, { useState, useEffect } from 'react';
import { Typography, Grid, Card, TextField, Zoom, } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import useStyles from './styles';
import { priceList } from "./priceList";

import { useDispatch } from 'react-redux';
import { fetchPrices } from '../../actions/crypto';
import { Alert } from '@mui/material';

export default function DisplayComponent() {

    const classes = useStyles();
    const dispatch = useDispatch();

    const [buyPrices, setBuyPrices] = useState({ krakenBTC: "loading...", krakenETH: "loading...", coinBaseBTC: "loading...", coinBaseETH: "loading...", maxETH: "loading...", maxBTC: "loading..." })
    const [sellPrices, setSellPrices] = useState({ krakenBTC: "loading...", krakenETH: "loading...", coinBaseBTC: "loading...", coinBaseETH: "loading...", minETH: "loading...", minBTC: "loading..." })

    useEffect(() => {

        let interval = setInterval(() => {

            dispatch(fetchPrices()).then(prices => {

                // clean up to prevent memory leak
                // adapted from: https://stackoverflow.com/questions/54954385/react-useeffect-causing-cant-perform-a-react-state-update-on-an-unmounted-comp
                setBuyPrices({ krakenBTC: "loading...", krakenETH: "loading...", coinBaseBTC: "loading...", coinBaseETH: "loading...", maxETH: "loading...", maxBTC: "loading..." });
                setSellPrices({ krakenBTC: "loading...", krakenETH: "loading...", coinBaseBTC: "loading...", coinBaseETH: "loading...", minETH: "loading...", minBTC: "loading..." });
                // end adaptation

                // set buy prices
                setBuyPrices({
                    krakenBTC: "$" + prices.kraken_BTC_BUY,
                    krakenETH: "$" + prices.kraken_ETH_BUY,
                    coinBaseBTC: "$" + prices.coinBase_BTC_BUY,
                    coinBaseETH: "$" + prices.coinBase_ETH_BUY,
                    maxBTC: prices.kraken_BTC_BUY < prices.coinBase_BTC_BUY ? "Lowest Bitcoin (BTC) Buy Price [Kraken]: $" + prices.kraken_BTC_BUY : "Lowest Bitcoin (BTC) Buy Price [Coinbase]: $" + prices.coinBase_BTC_BUY,
                    maxETH: prices.kraken_ETH_BUY < prices.coinBase_ETH_BUY ? "Lowest Ethereum (ETH) Buy Price [Kraken]: $" + prices.kraken_ETH_BUY : "Lowest Ethereum (ETH) Buy Price [Coinbase]: $" + prices.coinBase_ETH_BUY,
                });

                // set sell prices
                setSellPrices({
                    krakenBTC: "$" + prices.kraken_BTC_SELL,
                    krakenETH: "$" + prices.kraken_ETH_SELL,
                    coinBaseBTC: "$" + prices.coinBase_BTC_SELL,
                    coinBaseETH: "$" + prices.coinBase_ETH_SELL,
                    minBTC: prices.kraken_BTC_SELL > prices.coinBase_BTC_SELL ? "Highest Bitcoin (BTC) Sell Price [Kraken]: $" + prices.kraken_BTC_SELL : "Highest Bitcoin (BTC) Sell Price [Coinbase]: $" + prices.coinBase_BTC_SELL,
                    minETH: prices.kraken_ETH_SELL > prices.coinBase_ETH_SELL ? "Highest Ethereum (ETH) Sell Price [Kraken]: $" + prices.kraken_ETH_SELL : "Highest Ethereum (ETH) Sell Price [Coinbase]: $" + prices.coinBase_ETH_SELL,
                });

            }).catch((err) => {
                console.log(err);
            })
        }, 5000);

        // adapted from: https://stackoverflow.com/questions/65049812/how-to-call-a-function-every-minute-in-a-react-component
        return () => clearInterval(interval);
        // end adaptation

    }, [dispatch]);

    return (
        <div>
            <Grid container spacing={2} className={classes.container}>
                {["maxBTC", "maxETH", "minBTC", "minETH"].map((item, index) => (
                    <Grid container item xs={12} sm={6} md={6} lg={3} key={item} justifyContent="center">
                        <Alert sx={{ fontSize: "15px", justifyContent: "center", height: 100, width: 250 }} severity="success">
                            {item === "maxBTC" ? buyPrices.maxBTC :
                                item === "maxETH" ? buyPrices.maxETH :
                                    item === "minBTC" ? sellPrices.minBTC :
                                        item === "minETH" ? sellPrices.minETH : null}
                        </Alert>
                    </Grid>
                ))}
            </Grid>
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
                                                                "Error"}
                                            >
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
                                            </TextField>
                                        </CardContent>
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