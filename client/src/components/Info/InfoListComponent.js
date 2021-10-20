import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import Divider from '@mui/material/Divider';
import { Grid, Container } from '@material-ui/core';

import { infoList } from './infoList'; 

export default function InfoListComponent() {
  return (
    <List sx={{ width: '100%' }}>
      <Grid container>
        { /* Adapted from: https://stackoverflow.com/questions/38176352/javascript-map-array-last-item#:~:text=Fewer%20lines%20of%20code%20can%20achieve%20the%20same%20results */}
        {infoList.map((item, index, { length }) => (
          <Container key={index}>
            <Grid item>
              <ListItem>
                <ListItemAvatar><Avatar sx={{ bgcolor: "black" }}>{item.icon}</Avatar></ListItemAvatar>
                <ListItemText primary={item.consider} secondary={item.desc} />
              </ListItem>
            </Grid>
            <Grid item>
              {index + 1 === length ? null : <Divider />}
            </Grid>
          </Container>
        ))}
      </Grid>
    </List>
  );
}