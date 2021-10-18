import React from 'react'
import { Typography, Grid, Card, Zoom } from '@material-ui/core';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';

import useStyles from './styles';


// sources: https://www.fool.com/the-ascent/buying-stocks/articles/11-things-to-look-for-in-a-cryptocurrency-exchange/
// sources: https://www.nasdaq.com/articles/6-things-to-consider-when-choosing-a-cryptocurrency-exchange-2018-02-21

export default function Info() {

    const classes = useStyles();

    return (
        <Zoom in>
            <Card sx={{ maxWidth: 345 }} className={classes.card}>
                <Typography variant="h4" gutterBottom>Things to consider when choosing a cryptocurrency exchange:</Typography>
                <Divider className={classes.root}/>
            </Card>
        </Zoom>
    )
}
