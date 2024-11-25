import React from 'react';
import { jsPDF } from 'jspdf';

function InvoicePage() {
  // Example product details for the invoice
  const products = [
    { name: 'Eco-Friendly Towel', quantity: 2, price: 15.99 },
    { name: 'Recycled Notebooks', quantity: 3, price: 7.99 },
    { name: 'Steel Straws', quantity: 5, price: 2.49 },
  ];

  // Conversion rate from USD to INR (Indian Rupees)
  const conversionRate = 75;

  // Calculate the total price of all products in INR
  const totalAmountInINR = products.reduce((total, product) => {
    return total + product.quantity * product.price * conversionRate;
  }, 0);

  // Function to download the invoice as PDF
  const downloadInvoice = () => {
    const doc = new jsPDF();

    // Set title
    doc.setFontSize(20);
    doc.text('Invoice', 105, 20, { align: 'center' });

    // Table headers
    doc.setFontSize(12);
    doc.text('Product', 10, 40);
    doc.text('Quantity', 90, 40);
    doc.text('Price (INR)', 140, 40);
    doc.text('Total (INR)', 190, 40);

    // Table data
    let yPosition = 50;
    products.forEach((product) => {
      doc.text(product.name, 10, yPosition);
      doc.text(product.quantity.toString(), 90, yPosition);
      doc.text((product.price * conversionRate).toFixed(2), 140, yPosition);
      doc.text(
        (product.quantity * product.price * conversionRate).toFixed(2),
        190,
        yPosition
      );
      yPosition += 10;
    });

    // Total amount
    doc.setFontSize(14);
    doc.text(
      'Total Amount: ₹' + totalAmountInINR.toFixed(2),
      10,
      yPosition + 10
    );

    // Download the generated PDF
    doc.save('invoice.pdf');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {/* Invoice Title with Dark Blue Background */}
      <h1
        style={{
          backgroundColor: '#003366', // Dark blue background for the title
          color: 'white', // White text for the title
          padding: '10px',
          textAlign: 'center',
          borderRadius: '5px',
        }}
      >
        Invoice
      </h1>

      <table
        style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}
      >
        <thead>
          <tr>
            <th
              style={{
                backgroundColor: '#f2f2f2',
                fontWeight: 'bold',
                padding: '8px',
                border: '1px solid #ddd',
              }}
            >
              Product
            </th>
            <th
              style={{
                backgroundColor: '#f2f2f2',
                fontWeight: 'bold',
                padding: '8px',
                border: '1px solid #ddd',
              }}
            >
              Quantity
            </th>
            <th
              style={{
                backgroundColor: '#f2f2f2',
                fontWeight: 'bold',
                padding: '8px',
                border: '1px solid #ddd',
              }}
            >
              Price (INR)
            </th>
            <th
              style={{
                backgroundColor: '#f2f2f2',
                fontWeight: 'bold',
                padding: '8px',
                border: '1px solid #ddd',
              }}
            >
              Total (INR)
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                {product.name}
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                {product.quantity}
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                {(product.price * conversionRate).toFixed(2)}{' '}
                {/* Convert price to INR */}
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                {(product.quantity * product.price * conversionRate).toFixed(2)}{' '}
                {/* Total in INR */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ textAlign: 'right', marginTop: '20px' }}>
        <h3>Total Amount: ₹{totalAmountInINR.toFixed(2)}</h3>
      </div>

      {/* Download Button */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={downloadInvoice}
          style={{
            padding: '10px 20px',
            backgroundColor: '#003366',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Download Invoice
        </button>
      </div>
    </div>
  );
}

export default InvoicePage;
