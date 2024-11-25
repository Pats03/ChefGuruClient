import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

const Returns = () => {
  const initialOrderData = [
    {
      orderId: '101',
      trackingNumber: 'TRACK1234',
      status: 'Shipped',
      returnStatus: 'Not Returned',
    },
    {
      orderId: '102',
      trackingNumber: 'TRACK2345',
      status: 'Processing',
      returnStatus: 'Not Returned',
    },
    {
      orderId: '103',
      trackingNumber: 'TRACK3456',
      status: 'Delivered',
      returnStatus: 'Not Returned',
    },
    {
      orderId: '104',
      trackingNumber: 'TRACK4567',
      status: 'Shipped',
      returnStatus: 'Not Returned',
    },
    {
      orderId: '105',
      trackingNumber: 'TRACK5678',
      status: 'Processing',
      returnStatus: 'Not Returned',
    },
  ];

  const [orderData, setOrderData] = useState(initialOrderData);

  // Function to handle return processing
  const handleReturn = (orderId) => {
    const updatedOrders = orderData.map((order) => {
      if (order.orderId === orderId) {
        return { ...order, returnStatus: 'Returned', status: 'Returned' };
      }
      return order;
    });
    setOrderData(updatedOrders);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2
        style={{
          backgroundColor: '#003366',
          color: 'white',
          padding: '10px',
          textAlign: 'center',
          borderRadius: '5px',
        }}
      >
        Process Returns
      </h2>

      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="return process table">
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
              <TableCell
                align="left"
                style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold' }}
              >
                Return Status
              </TableCell>
              <TableCell
                align="left"
                style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold' }}
              >
                Process Return
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderData.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell align="left">{order.orderId}</TableCell>
                <TableCell align="left">{order.trackingNumber}</TableCell>
                <TableCell align="left">{order.status}</TableCell>
                <TableCell align="left">{order.returnStatus}</TableCell>
                <TableCell align="left">
                  {order.returnStatus === 'Not Returned' ? (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleReturn(order.orderId)}
                    >
                      Process Return
                    </Button>
                  ) : (
                    <span>Returned</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Returns;
