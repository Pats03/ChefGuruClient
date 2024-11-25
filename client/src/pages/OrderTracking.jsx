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

const OrdersTracking = () => {
  // Sample Order Data
  const orderData = [
    {
      orderId: '106',
      tracking_number: 'TRACK6789',
      status: 'Delivered',
      product_name: 'Apple iPhone 15',
    },
    {
      orderId: '107',
      tracking_number: 'TRACK6790',
      status: 'Shipped',
      product_name: 'Samsung Galaxy S24',
    },
    {
      orderId: '108',
      tracking_number: 'TRACK6791',
      status: 'Delivered',
      product_name: 'Sony WH-1000XM5 Headphones',
    },
    {
      orderId: '109',
      tracking_number: 'TRACK6792',
      status: 'Pending',
      product_name: 'Dell XPS 13 Laptop',
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
        Order Tracking
      </h2>

      {/* Table with Styled Headers */}
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="order tracking table">
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold' }}
              >
                Order ID
              </TableCell>
              <TableCell
                align="left"
                style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold' }}
              >
                Tracking Number
              </TableCell>
              <TableCell
                align="left"
                style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold' }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderData.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell align="left">{order.orderId}</TableCell>
                <TableCell align="left">{order.tracking_number}</TableCell>{' '}
                {/* Fixed this */}
                <TableCell align="left">{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrdersTracking;
