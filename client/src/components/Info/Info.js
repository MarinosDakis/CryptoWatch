import React from 'react'
import { Typography, Card, Zoom } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import useStyles from './styles';
import InfoListComponent from './InfoListComponent';

/*
    Sources for information:
    https://www.fool.com/the-ascent/buying-stocks/articles/11-things-to-look-for-in-a-cryptocurrency-exchange/
    https://www.nasdaq.com/articles/6-things-to-consider-when-choosing-a-cryptocurrency-exchange-2018-02-21
    https://www.forbes.com/advisor/investing/best-crypto-exchanges/
*/

export default function Info() {

    const classes = useStyles();

    return (
        <Zoom in>
            <Card sx={{ maxWidth: 345 }} className={classes.card}>
                <Typography className={classes.textField} variant="h4" align="center" gutterBottom><strong>Choosing an exchange</strong></Typography>
                <Divider className={classes.root} />
                <InfoListComponent />
            </Card>
        </Zoom>
    )
}
