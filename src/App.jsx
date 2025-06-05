import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import { useSelector } from "react-redux";
import About from './components/About'
import Product from './components/Product'
import Error from './components/Error';
import Cart from './components/Cart';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const App = () => {

  const amount = useSelector(state => state.cart.count)
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      backgroundColor: '#11c2f3'
    },
  }));
  return (
    <BrowserRouter >
      <nav >
        <NavLink to="/" activeclassname="active">About</NavLink>
        <NavLink to="/product" activeclassname="active">Product  </NavLink>
        <NavLink to="/cart" activeclassname="active">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={amount} color="secondary" >
              <ShoppingCartIcon sx={{ color: 'white' }} />
            </StyledBadge>
          </IconButton>
        </NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;



