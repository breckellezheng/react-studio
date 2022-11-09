// import React from 'react';
// import { useState } from "react";

// export default function AddtoCart(props) {
//     const [count, setCount] = useState(0);
//     const [price, setPrice] = useState(0);
//     return (
//         <button onClick={() => setCount(count + 1)} size="large" color="primary">
//         ADD TO CART
//         <h5>{count}x</h5>
//         </button>
//       );
//     }
import React from 'react';
import { useState } from "react";
import { Button } from '@mui/material';

const AddI = (props) => {
  const [count, setCount] = useState(0);
  return (
        <Button onClick={() => props.clickFtn(props.item)} variant="contained" type="submit">
          Add To Cart
        </Button>
  );
};

export default AddI;
