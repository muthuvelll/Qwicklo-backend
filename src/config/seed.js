const Product = require('../models/Product');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const seedDatabase = async () => {
  try {
    const adminExists = await User.findOne({ role: 'admin' });
    if (!adminExists) {
      await User.create({
        name: 'Admin',
        email: process.env.ADMIN_EMAIL || 'admin@qwiklo.com',
        password: process.env.ADMIN_PASSWORD || 'Admin@123',
        role: 'admin',
        phone: '9999999999'
      });
      console.log('Admin user created');
    }

    const products = [
      { name: 'Classic White Sneakers', price: 999, originalPrice: 1999, category: 'footwear', emoji: '👟', description: 'Premium comfort sneakers', stock: 50, rating: 4.5, reviews: 128 },
      { name: 'Denim Jacket', price: 1499, originalPrice: 2999, category: 'clothing', emoji: '🧥', description: 'Stylish denim jacket', stock: 30, rating: 4.3, reviews: 89 },
      { name: 'Wireless Earbuds', price: 1299, originalPrice: 2499, category: 'electronics', emoji: '🎧', description: 'Crystal clear sound', stock: 45, rating: 4.6, reviews: 203 },
      { name: 'Cotton Kurta', price: 599, originalPrice: 999, category: 'clothing', emoji: '👕', description: 'Premium cotton kurta', stock: 60, rating: 4.2, reviews: 156 },
      { name: 'Smart Watch', price: 2999, originalPrice: 5999, category: 'electronics', emoji: '⌚', description: 'Feature packed smartwatch', stock: 25, rating: 4.4, reviews: 97 },
      { name: 'Running Shoes', price: 1799, originalPrice: 3499, category: 'footwear', emoji: '👟', description: 'Lightweight running shoes', stock: 40, rating: 4.7, reviews: 312 },
      { name: 'Leather Wallet', price: 499, originalPrice: 999, category: 'accessories', emoji: '👛', description: 'Genuine leather wallet', stock: 80, rating: 4.1, reviews: 74 },
      { name: 'Sunglasses', price: 799, originalPrice: 1499, category: 'accessories', emoji: '🕶️', description: 'UV protection sunglasses', stock: 55, rating: 4.3, reviews: 118 },
      { name: 'Backpack', price: 1199, originalPrice: 2299, category: 'bags', emoji: '🎒', description: 'Spacious travel backpack', stock: 35, rating: 4.5, reviews: 167 },
      { name: 'Bluetooth Speaker', price: 1599, originalPrice: 2999, category: 'electronics', emoji: '🔊', description: 'Powerful bass speaker', stock: 28, rating: 4.4, reviews: 143 }
    ];

    await Product.insertMany(products);
    console.log('Products seeded successfully');
  } catch (err) {
    console.log('Seed error:', err.message);
  }
};

module.exports = { seedDatabase };
