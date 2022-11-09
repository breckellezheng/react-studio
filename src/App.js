import "./App.css";
import BakeryItem from './components/BakeryItem.js';
import AddI from './components/AddI';
import Cart from './components/Cart';
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import {
  ListItemText,
} from '@mui/material';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState(0);
  const [cart, setCart] = useState({});

  function handleClick(item) {
    setCount(count + 1);
    setTotal(total + item.price);
    setIndex(index + 1);
    setName(item.name);
  }


  return (
    <div className="App">
      <h1>My Bakery</h1> 

      <new-line></new-line>
      <br></br>

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem item={item} index={index} clickFtn={handleClick}/> // replace with BakeryItem component
      ))}

      <div>
        <h1>Cart</h1>
        {/* TODO: render a list of items in the cart */}
        <h5>{count}x</h5>
        <h3>Total Price: ${total}</h3>
        <h3> {name} </h3>
      </div>
    </div>
  );
}

export default App;
