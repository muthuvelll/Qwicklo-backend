const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const { protect } = require('../middleware/auth');

router.post('/', protect, async (req, res) => {
  try {
    const { items, shippingAddress, paymentMethod } = req.body;
    let totalAmount = 0;
    items.forEach(item => { totalAmount += item.price * item.quantity; });
    const deliveryCharge = totalAmount >= 499 ? 0 : 40;
    const orderNumber = 'QWK0' + (Date.now().toString().slice(-5));
    const order = await Order.create({
      orderNumber,
      user: req.user.id,
      items,
      totalAmount,
      deliveryCharge,
      finalAmount: totalAmount + deliveryCharge,
      shippingAddress,
      paymentMethod
    });
    res.status(201).json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.get('/my', protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json({ success: true, orders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
