import "./App.css";
import BakeryItem from './components/BakeryItem.js';
import AddI from './components/AddI';
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [index, setIndex] = useState(0);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [name, setName] = useState([]);

  function handleClick(item) {
    const newCart = cart.concat({name});
    setTotal(total + item.price);
    setIndex(index + 1);
    setCart(newCart);
    setName(item.name);
    console.log(name);
    console.log(cart)
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
        <ul>
        <div>
          {cart.map((item, index) => (
            <li key={index}>
              <div>{item.name}</div>
            </li>
          ))}
        </div>
      </ul>

        <h3>Total Price: ${total}</h3>
      </div>
    </div>
  );
}

export default App;
