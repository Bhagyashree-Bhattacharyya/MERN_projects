import { useState } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Subheader from './Components/Layout/Subheader';
import Product from './Components/Products/Product';

const App= () => {
    const [cartItems, setCartItems] = useState(0);

    const handleAddItem = () => {
      setCartItems(cartItems+1)
    }

    const handleRemoveItem = () => {
      setCartItems(cartItems-1)
    }

    return (
      <div>
          <Header count={cartItems}/>
          <Subheader/>
          <Product onAddItem={handleAddItem} onRemoveItem={handleRemoveItem}/>
      </div>
    );
}

export default App;
