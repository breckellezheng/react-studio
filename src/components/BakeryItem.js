// TODO: create a component that displays a single bakery item

import React from 'react';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
  } from '@mui/material';

export default function BakeryItem(item) {
    return (
        <Card sx={{ maxWidth: 500}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={item.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" color="primary">
              ADD TO CART
            </Button>
          </CardActions>
        </Card>
      );
    }
