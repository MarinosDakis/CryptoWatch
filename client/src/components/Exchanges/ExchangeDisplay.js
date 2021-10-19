import React from 'react';
import { Typography, Grid, Card, Zoom } from '@material-ui/core';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import WebIcon from '@mui/icons-material/Web';

import useStyles from './styles';
import { Rating } from '@mui/material';

import { exchangeList } from './Exchange list';

export default function ExchangeDisplay() {

    const classes = useStyles();

    return (
        <Zoom in>
         <Grid container className={classes.container}>

                    {exchangeList.map((item, index) => (
                        <Card sx={{ maxWidth: 400 }} className={classes.card}>
                        <Typography  gutterBottom variant="h4" align="center">{item.name}</Typography>
                        <img src={item.img}></img>
                            <CardMedia className={classes.img} component="img" height="75px" image={`"${item.logo}`} alt={item.name ? `${item.name}-logo` : "exchange-logo"} />
                            <CardContent>
                                <Typography component="legend">Rating</Typography>
                                <Rating name="read-only" value={item.rating} readOnly />
                            </CardContent>
                            <CardActions display="flex">
                                <Grid container>
                                    <Grid item xs align="center">
                                        <a className={classes.url} href={item.url} target="_blank" rel="noreferrer">
                                            <WebIcon />
                                            <Typography>Visit Exchange</Typography>
                                        </a>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    ))}
                </Grid>
            </Zoom>
    )
}
