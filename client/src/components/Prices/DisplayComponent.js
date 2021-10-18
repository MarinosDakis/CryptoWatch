import React from 'react'
import { Typography, Grid, Card, TextField, Zoom } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import { InputAdornment } from '@material-ui/core';
//import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import useStyles from './styles';

export default function DisplayComponent({ img, title, buyPrice, sellPrice, companyName }) {

    const classes = useStyles();

    return (
        <Zoom in >
                <Grid container className={classes.container}>
                    <Card variant="outlined" className={classes.card}>
                        <Typography className={classes.root} variant="h4" gutterBottom align="center">{companyName}</Typography>
                        <CardMedia className={classes.img} component="img" height="auto" image={img} alt="crypto-image"></CardMedia>
                        <Typography className={classes.root} variant="h4" gutterBottom  align="center">{title}</Typography>
                        <Divider className={classes.root} />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item align="center">
                                    <Typography className={classes.textField} gutterBottom variant="h5" align="center"><strong>BUY</strong></Typography>
                                    <TextField  InputProps={{ className:classes.input}} className={classes.root} readOnly variant="outlined" value={buyPrice ? buyPrice : "Error"}></TextField>  
                                </Grid>
                                <Grid item align="center">
                                    <Typography className={classes.textField} gutterBottom variant="h5" align="center"><strong>SELL</strong></Typography>
                                    <TextField InputProps={{ className:classes.input}} readOnly variant="outlined" value={sellPrice ? sellPrice : "Error"}></TextField>  
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Zoom >
    )
}