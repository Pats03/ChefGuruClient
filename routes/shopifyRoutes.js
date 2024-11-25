const express = require('express');
const router = express.Router();
const shopifyController = require('../controllers/shopifyController');
const apiKeyMiddleware = require('../middleware/apiKeyMiddleware');

router.post('/validate-api-key', shopifyController.validateApiKey);
router.get('/sync-products', apiKeyMiddleware, shopifyController.syncProducts);
router.get('/sync-orders', apiKeyMiddleware, shopifyController.syncOrders);
router.get(
  '/sync-inventory',
  apiKeyMiddleware,
  shopifyController.syncInventory
);
router.post('/create-order', apiKeyMiddleware, shopifyController.createOrder);
router.get(
  '/track-order/:orderId',
  apiKeyMiddleware,
  shopifyController.trackOrder
);
router.post(
  '/generate-invoice',
  apiKeyMiddleware,
  shopifyController.generateInvoice
);

module.exports = router;
