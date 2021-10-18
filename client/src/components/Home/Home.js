import React from 'react'
import { Typography, Grid, Card, Zoom } from '@material-ui/core';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import useStyles from './styles';
import background from "../../images/background.jpg";

export default function Home() {

    const classes = useStyles();
    
    /*
    const filler = ["Crypto Watch is a web application created using Javascript (React JS, Node Js) and Material UI.",
                    "Current Features: Current Bitcoin and Ethereum prices for different currencies and information display for different platforms."]


                <Container item xs={12} sm={7}>
                    {filler.map((item, index) => (
                        <Paper elevation={3} className={classes.paper}>
                        <Typography key={index} variant="h5" align="center">{item}</Typography>
                        </Paper>
                    ))}
                </Container>

    */

    return (
            <Zoom in>
                <Grid container className={classes.container}>
                    <Card sx={{ maxWidth: 345 }} className={classes.card}>
                    <Typography  gutterBottom variant="h6" align="center">Created by Marinos Dakis</Typography>
                        <CardMedia className={classes.img} component="img" height="auto" image={background} alt="crypto-image" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Crypto Watch is a web application created using Javascript (React JS, Node Js) and Material UI.
                            </Typography>
                            <Typography variant="body2">
                            <strong>Current Features:</strong> Displays updated Bitcoin & Ethereum prices and information kiosk on different crypto exchanges to use.
                            </Typography>
                        </CardContent>
                        <CardActions display="flex">
                            <Grid container spacing={2}>
                                <Grid item xs align="center">
                                    <a className={classes.url} href="https://github.com/MarinosDakis" target="_blank" rel="noreferrer">
                                        <GitHubIcon /> 
                                        <Typography textDecoration="none">GitHub</Typography>
                                    </a>
                                </Grid>
                                <Grid item xs align="center">
                                    <a className={classes.url} href="https://marinosdakis.com/" target="_blank" rel="noreferrer">
                                        <AccountBoxIcon />
                                        <Typography>Portfolio site</Typography>
                                    </a>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>
            </Zoom>
    )
}
