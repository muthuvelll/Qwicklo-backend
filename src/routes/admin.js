const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json({ success: true, message: 'Admin route working' });
});

module.exports = router;
