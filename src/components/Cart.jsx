import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import RemoveIcon from '@mui/icons-material/Remove';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { add, sub, removeFromSelector, addSend, clearProducts, toggleDelivery, removeSend } from "../redux/cartSlice";
import Checkbox from '@mui/material/Checkbox';
const Cart = () => {
  const selectorProduct = useSelector(state => state.cart.selectorProduct);
  const dispatch = useDispatch();
  const total = useSelector(state => state.cart.totalSum)
  const isDeliveryChecked = useSelector(state => state.cart.isDeliveryChecked);
  const handleDeliveryChange = () => {
    if (isDeliveryChecked) {
      dispatch(removeSend());
    } else {
      dispatch(addSend());
    }
    dispatch(toggleDelivery());
  };
  const payment = () => {
    if (window.confirm('Are you sure you want to complete the purchase?')) {
      dispatch(clearProducts())
    }


  }
  return (
    <div>
      <TableContainer component={Paper} style={{ maxHeight: '400px', overflow: 'auto' }} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="right">image</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center"><button style={{ backgroundColor: 'white', border: '1px solid black' }}
                onClick={() => dispatch(clearProducts())}>Delete All</button></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectorProduct.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={row.image} alt="" height="150px" />
                </TableCell>
                <TableCell align="center">{row.title}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">
                  <Box sx={{ '& > :not(style)': { m: 1 }, position: 'sticky', top: '0', zIndex: 1 }} width="200px" height="50px" display="flex">
                    <Fab size="small" aria-label="add" color=" #ffffff" onClick={() => dispatch(sub(row.title, row.sum))}>
                      <RemoveIcon />
                    </Fab>

                    <div width="100px">{row.sum}</div>
                    <Fab size="small" aria-label="add" color=" #ffffff" onClick={() => dispatch(add(row.title, row.sum))}>
                      <AddRoundedIcon />
                    </Fab>
                  </Box></TableCell>
                <TableCell align="center"><button onClick={() => dispatch(removeFromSelector(row.title))}>Delete</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <p>Total Sum: {total}</p>

      <Checkbox
        checked={isDeliveryChecked}
        onChange={handleDeliveryChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <label>Home delivery</label>
      <br />
      <button onClick={() => payment()}>For Payment</button>
    </div>
  );
};

export default Cart;