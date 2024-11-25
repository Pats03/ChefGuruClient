import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const Order = () => {
  // Sample Order Data
  const orderData = [
    {
      id: '106',
      customer: 'Sarah Lee',
      line_items: [{ name: 'Apple iPhone 15', quantity: 2 }],
    },
    {
      id: '107',
      customer: 'John Doe',
      line_items: [{ name: 'Samsung Galaxy S24', quantity: 3 }],
    },
    {
      id: '108',
      customer: 'Emily Clark',
      line_items: [{ name: 'Sony WH-1000XM5 Headphones', quantity: 1 }],
    },
    {
      id: '109',
      customer: 'Michael Brown',
      line_items: [{ name: 'Dell XPS 13 Laptop', quantity: 1 }],
    },
    {
      id: '110',
      customer: 'Olivia Smith',
      line_items: [{ name: 'Fitbit Charge 5', quantity: 4 }],
    },
    {
      id: '111',
      customer: 'Liam Johnson',
      line_items: [{ name: 'Nike Air Zoom Pegasus 40', quantity: 2 }],
    },
    {
      id: '112',
      customer: 'Sophia Williams',
      line_items: [{ name: 'Apple iPhone 15', quantity: 1 }],
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      {/* Title Block with Background Color */}
      <h2
        style={{
          backgroundColor: '#003366',
          color: 'white',
          padding: '10px',
          textAlign: 'center',
          borderRadius: '5px',
        }}
      >
        Orders
      </h2>

      {/* Table with Styled Headers */}
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="order table">
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold' }}
              >
                ID
              </TableCell>
              <TableCell
                align="left"
                style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold' }}
              >
                Customer Name
              </TableCell>
              <TableCell
                align="left"
                style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold' }}
              >
                Product Name
              </TableCell>
              <TableCell
                align="left"
                style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold' }}
              >
                Quantity
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderData.map((order) =>
              order.line_items.map((item, index) => (
                <TableRow key={`${order.id}-${index}`}>
                  {/* Display Order ID and Customer Name for each line item */}
                  <TableCell align="left">{order.id}</TableCell>
                  <TableCell align="left">{order.customer}</TableCell>
                  <TableCell align="left">{item.name}</TableCell>
                  <TableCell align="left">{item.quantity}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Order;
