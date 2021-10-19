import React from 'react';
import { Typography, Grid, Card, Zoom, Container, Divider, ListItemText } from '@material-ui/core';
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
                    <Container key={item.name} className={classes.container}>
                        <Card className={classes.card} align="center">
                            { /* adapted from: https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react#:~:text=Inside%20public%20folder%20create%20an%20assets%20folder%20and%20place%20image%20path%20accordingly. */}
                            <CardMedia className={`${classes.img} ${classes.root}`} component="img" image={`${process.env.PUBLIC_URL + item.logo}`} alt={item.name ? `${item.name}-logo` : "exchange-logo"} />
                            <CardContent>
                                <Typography className={classes.text} variant="h5" component="legend">Rating</Typography>
                                <Rating value={item.rating} size="large" readOnly />
                                <Divider className={classes.root} />
                                <Typography className={classes.text} variant="h5" component="legend">Tradeable Cryptocurrencies</Typography>
                                <Typography className={classes.text} variant="h6">{item.cryptoAmount}</Typography>
                                <Divider className={classes.root} />
                                <Typography className={classes.text} variant="h5" component="legend">Fee (Maker/Taker)</Typography>
                                <Typography className={classes.text} variant="h6">{item.fee}</Typography>
                                <Divider className={classes.root} />
                                <Typography className={classes.text} variant="h5" component="legend">Benefits</Typography>
                                <Typography className={classes.text} variant="h6">{item.fee}</Typography>
                                <Divider className={classes.root} />
                                <Typography className={classes.text} variant="h5" component="legend">Drawbacks</Typography>
                                <Typography className={classes.text} variant="h6">{item.fee}</Typography>
                                <Divider className={classes.root} />
                            </CardContent>
                            <CardActions display="flex">
                                <Grid container>
                                    <Grid item xs align="center">
                                        <a className={classes.url} href={item.url} target="_blank" rel="noreferrer">
                                            <WebIcon />
                                            <Typography>Exchange Website</Typography>
                                        </a>
                                    </Grid>
                                </Grid>
                            </CardActions>
                            <Typography variant="caption">Source: Forbes</Typography>
                        </Card>
                    </Container>
                    ))}

                </Grid>
            </Zoom>
    )
}
