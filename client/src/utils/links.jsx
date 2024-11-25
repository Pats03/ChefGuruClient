import React from 'react';
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { FaShippingFast } from 'react-icons/fa'; // Icon for Order Tracking

const links = [
  { text: 'Inventory', path: '.', icon: <FaWpforms /> },
  { text: 'Orders', path: 'orders', icon: <MdQueryStats /> },
  { text: 'Products', path: 'products', icon: <IoBarChartSharp /> },
  { text: 'Process Returns', path: 'returns', icon: <ImProfile /> },
  { text: 'Invoice', path: 'invoice', icon: <FaFileInvoiceDollar /> }, // New Invoice link
  { text: 'Order Tracking', path: 'order-tracking', icon: <FaShippingFast /> }, // New Order Tracking link
];

export default links;
