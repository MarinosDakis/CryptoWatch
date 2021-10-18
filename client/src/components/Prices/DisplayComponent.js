import React from 'react'
import { Typography, Grid, Card, TextField, Zoom } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import { InputAdornment } from '@material-ui/core';
//import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import useStyles from './styles';

export default function DisplayComponent({ img, title, desc, buyPrice, sellPrice, actions }) {

    const classes = useStyles();

    return (
        <Zoom in >
                <Grid container className={classes.container}>
                    <Card variant="outlined" sx={{ maxWidth: 345 }} className={classes.card}>
                        <CardMedia 
                            className={classes.img}
                            component="img"
                            height="auto"
                            image={img}
                            alt="crypto-image"
                        />
                        <Divider className={classes.root} />
                        <CardContent>
                            <Typography className={classes.root} gutterBottom variant="h3" align="center">{title}</Typography>
                            <Grid container spacing={2}>
                            <Grid item xs align="center">
                                    <Typography className={classes.textField} gutterBottom variant="h4" align="center">BUY</Typography>
                                    <TextField className={classes.root} readOnly variant="filled" value={buyPrice}></TextField>  
                                </Grid>
                                <Grid item xs align="center">
                                    <Typography className={classes.textField} gutterBottom variant="h4" align="center">SELL</Typography>
                                    <TextField className={classes.root} readOnly variant="filled" value={sellPrice} style={{ color: "red" }}></TextField>  
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions display="flex">
                            {actions}
                        </CardActions>
                    </Card>
                </Grid>
            </Zoom >
    )
}