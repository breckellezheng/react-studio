import React from 'react';

import {
  List,
  ListItemText,
} from '@mui/material';

export default function Cart(props) {
  const createEntry = (i) => {
    return (
        <ListItemText>{i.name}</ListItemText>
    );
  };
  const mData = props.i;
  const listM = mData.map(createEntry);
  return <List>{listM}</List>;
}
