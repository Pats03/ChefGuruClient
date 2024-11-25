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

const Products = () => {
  // Sample Product Data
  const initialProductData = [
    {
      id: '1',
      title: 'Apple iPhone 15',
      sku: 'IP15-256GB',
      inventory_quantity: 120,
    },
    {
      id: '2',
      title: 'Samsung Galaxy S24',
      sku: 'SGS24-128GB',
      inventory_quantity: 80,
    },
    {
      id: '3',
      title: 'Sony WH-1000XM5 Headphones',
      sku: 'SWHXM5-BLK',
      inventory_quantity: 50,
    },
    {
      id: '4',
      title: 'Dell XPS 13 Laptop',
      sku: 'DXPS13-INTEL',
      inventory_quantity: 40,
    },
    {
      id: '5',
      title: 'Fitbit Charge 5',
      sku: 'FBCH5-BLK',
      inventory_quantity: 150,
    },
    {
      id: '6',
      title: 'Nike Air Zoom Pegasus 40',
      sku: 'NAZP40-MENS',
      inventory_quantity: 200,
    },
  ];

  const [productData, setProductData] = useState(initialProductData);

  // Function to handle adding products to the cart
  const handleAddToCart = (productId) => {
    alert(`Added Product ${productId} to cart!`);
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
        Product Page
      </h2>

      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="product table">
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
                Title
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
                Quantity
              </TableCell>
              <TableCell
                align="left"
                style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold' }}
              >
                Add to Cart
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productData.map((product) => (
              <TableRow key={product.id}>
                <TableCell align="left">{product.id}</TableCell>
                <TableCell align="left">{product.title}</TableCell>
                <TableCell align="left">{product.sku}</TableCell>
                <TableCell align="left">{product.inventory_quantity}</TableCell>
                <TableCell align="left">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    Add to Cart
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Products;
