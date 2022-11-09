// TODO: create a component that displays a single bakery item

import React from 'react';
import { useState } from "react";
import AddI from './AddI';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
  } from '@mui/material';

/* Card template from mui/material */
export default function BakeryItem(props) {
    return (
        <Card sx={{ maxWidth: 400}}>
            <CardMedia
              component="img"
              height="300"
              image={props.item.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.item.name}
                <Typography variant="h6" color="text.primary">
                ${props.item.price}
              </Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.item.description}
              </Typography>
            </CardContent>
          <CardActions>
            <AddI clickFtn={props.clickFtn} item={props.item}/>
          </CardActions>
        </Card>
      );
    }
