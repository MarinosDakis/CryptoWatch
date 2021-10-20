import React from 'react';
import { Typography, Grid, Card, Zoom, List, Container } from '@material-ui/core';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import WebIcon from '@mui/icons-material/Web';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import useStyles from './styles';
import { Rating } from '@mui/material';

import { exchangeList } from './Exchange list';

export default function ExchangeDisplay() {

    const classes = useStyles();

    // adapted from [10/19/2021]: https://mui.com/components/accordion/#CustomizedAccordions.js

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
      ))(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
          borderBottom: 0,
        },
        '&:before': {
          display: 'none',
        },
      }));

      const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
          {...props}
        />
      ))(({ theme }) => ({
        backgroundColor:
          theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
          transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
          marginLeft: theme.spacing(1),
        },
      }));

      const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: '1px solid rgba(0, 0, 0, .125)',
      }));

    // end adaptation

    return (
        <Zoom in>
         <Grid container spacing={2} className={classes.container}>
                    {exchangeList.map((item, index) => (
                    <Grid item xs={12} sm={12} md={6} lg={6} align="center" key={index} className={classes.container}>
                        <Card className={classes.card} align="center">
                            { /* adapted from: https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react#:~:text=Inside%20public%20folder%20create%20an%20assets%20folder%20and%20place%20image%20path%20accordingly. */}
                            <a className={classes.url} href={item.url} target="_blank" rel="noreferrer">
                                 <CardMedia className={`${classes.img} ${classes.root}`} component="img" image={`${process.env.PUBLIC_URL + item.logo}`} alt={item.name ? `${item.name}-logo` : "exchange-logo"} />
                            </a>
                            <CardContent>
                                <Typography className={classes.text} variant="h5" component="legend"><strong>Rating</strong></Typography>
                                <Rating value={item.rating} size="large" readOnly precision={0.1} />
                                <Divider className={classes.root} />
                                <Typography className={classes.text} variant="h5" component="legend"><strong>Tradeable Cryptocurrencies</strong></Typography>
                                <Typography className={classes.text} variant="h6">{item.cryptoAmount}</Typography>
                                <Divider className={classes.root} />
                                <Typography className={classes.text} variant="h5" component="legend"><strong>Fees</strong> (Maker/Taker)</Typography>
                                <Typography className={classes.text} variant="h6">{item.fee}</Typography>
                                <Divider className={classes.root} />
                                <Accordion expanded={expanded === `benefits${item.name}`} onChange={handleChange(`benefits${item.name}`)}>
                                    <AccordionSummary aria-controls={`benefits${item.name}-content`}>
                                        <Typography className={classes.text}>Benefits</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <List sx={{ width: '100%' }}>
                                            {item.benefits.map((item, index, {length}) => (
                                              <Container>
                                                  <ListItem key={"benefit" + index}>
                                                  <ListItemAvatar><Avatar sx={{ width: 24, height: 24, bgcolor: "green" }}><CheckIcon /></Avatar></ListItemAvatar>
                                                      <ListItemText primary={item} />
                                                  </ListItem>   
                                                  {index + 1 === length ? null : <Divider />}
                                                </Container>
                                            ))}
                                        </List>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === `drawbacks${item.name}`} onChange={handleChange(`drawbacks${item.name}`)}>
                                    <AccordionSummary aria-controls={`drawbacks${item.name}-content`}>
                                        <Typography className={classes.text}>Drawbacks</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <List sx={{ width: '100%' }}>
                                            {item.drawbacks.map((item, index, {length}) => (
                                                <Container>
                                                  <ListItem key={"drawback" + index}>
                                                  <ListItemAvatar><Avatar sx={{ width: 24, height: 24, bgcolor: "red" }}><CloseIcon /></Avatar></ListItemAvatar>
                                                      <ListItemText primary={item} />
                                                  </ListItem> 
                                                  {index + 1 === length ? null : <Divider />}
                                                </Container>  
                                            ))}
                                        </List>
                                    </AccordionDetails>
                                </Accordion>
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
                            <a className={classes.url} href="https://www.forbes.com/advisor/investing/best-crypto-exchanges/" target="_blank" rel="noreferrer">
                                <Typography variant="caption">Source: Forbes</Typography>
                            </a>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Zoom>
    )
}
