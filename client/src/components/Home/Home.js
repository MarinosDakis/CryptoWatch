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

    return (
        <Zoom in>
            <Grid container className={classes.container}>
                <Card sx={{ maxWidth: 345 }} className={classes.card}>
                    <Typography gutterBottom variant="h6" align="center">Created by Marinos Dakis</Typography>
                    <CardMedia className={classes.img} component="img" height="auto" image={background} alt="crypto-image" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Crypto Watch is a full-stack web application created using Javascript (React JS, Redux, Node Js) and Material UI.
                        </Typography>
                        <Typography variant="body2">
                            <strong>Current Features:</strong> Displays Bitcoin & Ethereum price data from REST APIs every 5 seconds. Contains recommendations and information page describing the benefits and drawbacks of different cryptocurrency trading platforms. Mobile responsive. 
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
