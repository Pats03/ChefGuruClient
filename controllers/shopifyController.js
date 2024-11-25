const { getStoreData } = require('../services/shopifyService');
const PDFDocument = require('pdfkit');
const fs = require('fs');

// Validate API Key
exports.validateApiKey = (req, res) => {
  const { apiKey } = req.body;

  getStoreData(apiKey)
    .then((store) => {
      res.status(200).json({
        success: true,
        message: 'API Key validated successfully!',
        storeData: store,
      });
    })
    .catch(() => {
      res.status(401).json({
        success: false,
        message: 'Invalid API Key',
      });
    });
};

// Sync Products
exports.syncProducts = (req, res) => {
  const store = req.store;
  res.status(200).json({
    success: true,
    data: store.products,
  });
};

// Sync Orders
exports.syncOrders = (req, res) => {
  const store = req.store;
  res.status(200).json({
    success: true,
    data: store.orders,
  });
};

// Sync Inventory
exports.syncInventory = (req, res) => {
  const store = req.store;
  res.status(200).json({
    success: true,
    data: store.inventory,
  });
};

// Create Order
exports.createOrder = (req, res) => {
  const { customer, lineItems } = req.body;
  const store = req.store;

  // Validate and update inventory
  const orderValid = lineItems.every((item) => {
    const product = store.products.find((p) => p.id === item.productId);
    return product && product.inventory_quantity >= item.quantity;
  });

  if (!orderValid) {
    return res.status(400).json({
      success: false,
      message: 'Insufficient inventory',
    });
  }

  // Deduct inventory and create order
  lineItems.forEach((item) => {
    const product = store.products.find((p) => p.id === item.productId);
    product.inventory_quantity -= item.quantity;
  });

  const newOrder = {
    id: (store.orders.length + 101).toString(),
    customer,
    line_items: lineItems,
  };

  store.orders.push(newOrder);

  res.status(201).json({
    success: true,
    message: 'Order created successfully',
    order: newOrder,
  });
};

// Track Order
exports.trackOrder = (req, res) => {
  const { orderId } = req.params;
  const store = req.store;

  const trackingInfo = store.orderTracking.find((t) => t.orderId === orderId);
  if (!trackingInfo) {
    return res.status(404).json({
      success: false,
      message: 'Tracking info not found',
    });
  }

  res.status(200).json({
    success: true,
    data: trackingInfo,
  });
};

// Generate Invoice
exports.generateInvoice = (req, res) => {
  const { orderId } = req.body;
  const store = req.store;

  const order = store.orders.find((o) => o.id === orderId);
  if (!order) {
    return res.status(404).json({
      success: false,
      message: 'Order not found',
    });
  }

  const doc = new PDFDocument();
  const filePath = `./invoices/invoice-${orderId}.pdf`;

  doc.pipe(fs.createWriteStream(filePath));
  doc.text(`Invoice for Order ${orderId}`);
  doc.text(`Customer: ${order.customer}`);
  order.line_items.forEach((item) => {
    doc.text(`- ${item.name}: Quantity ${item.quantity}`);
  });
  doc.end();

  res.download(filePath, `invoice-${orderId}.pdf`);
};
