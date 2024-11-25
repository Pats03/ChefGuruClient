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

const Inventory = () => {
  const inventoryData = [
    { id: '1', sku: 'A1-123', quantity: 50, name: 'Apple iPhone 15' },
    { id: '2', sku: 'B1-123', quantity: 30, name: 'Samsung Galaxy S24' },
    {
      id: '3',
      sku: 'A2-123',
      quantity: 20,
      name: 'Sony WH-1000XM5 Headphones',
    },
    { id: '4', sku: 'A3-123', quantity: 10, name: 'Dell XPS 13 Laptop' },
    { id: '5', sku: 'A4-123', quantity: 100, name: 'Fitbit Charge 5' },
    { id: '6', sku: 'A5-123', quantity: 75, name: 'Nike Air Zoom Pegasus 40' },
    { id: '7', sku: 'A6-123', quantity: 40, name: 'Apple iPhone 15' },
  ];

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
        Inventory Management
      </h2>

      {/* Table with Styled Headers */}
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="inventory table">
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
                SKU
              </TableCell>
              <TableCell
                align="left"
                style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold' }}
              >
                Name
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
            {inventoryData.map((product) => (
              <TableRow key={product.id}>
                <TableCell align="left">{product.id}</TableCell>
                <TableCell align="left">{product.sku}</TableCell>
                <TableCell align="left">{product.name}</TableCell>
                <TableCell align="left">{product.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Inventory;
