const User = require('../models/User');
const Product = require('../models/Product');

const products = [
  { name: "Men's Casual T-Shirt", description: "Premium cotton casual t-shirt", highlights: ["100% Pure Cotton", "Pre-shrunk fabric", "Comfortable fit"], category: "Men", emoji: "👕", price: 299, originalPrice: 599, badge: "BESTSELLER", ratings: 4.5, reviewCount: 234 },
  { name: "Women's Floral Kurti", description: "Beautiful floral print kurti", highlights: ["Soft rayon fabric", "Floral print", "Regular fit"], category: "Women", emoji: "👗", price: 499, originalPrice: 999, badge: "TRENDING", ratings: 4.7, reviewCount: 189 },
  { name: "Wireless Bluetooth Earbuds", description: "High quality sound with noise cancellation", highlights: ["30hr battery", "Noise cancellation", "IPX5 waterproof"], category: "Electronics", emoji: "🎧", price: 1299, originalPrice: 2999, badge: "HOT", ratings: 4.3, reviewCount: 567 },
  { name: "Stainless Steel Water Bottle", description: "Keep drinks cold 24hrs or hot 12hrs", highlights: ["Food grade steel", "Double wall", "Leak proof"], category: "Kitchen", emoji: "🍶", price: 399, originalPrice: 799, badge: "ECO", ratings: 4.6, reviewCount: 312 },
  { name: "Kids Cartoon Backpack", description: "Cute spacious backpack for school", highlights: ["Waterproof", "Multiple compartments", "Ergonomic straps"], category: "Kids", emoji: "🎒", price: 599, originalPrice: 1199, badge: "KIDS LOVE", ratings: 4.8, reviewCount: 445 },
  { name: "Yoga Mat with Carry Bag", description: "Anti-slip yoga mat for workouts", highlights: ["6mm thick", "Anti-slip", "Eco-friendly TPE"], category: "Sports", emoji: "🧘", price: 799, originalPrice: 1599, badge: "FITNESS", ratings: 4.4, reviewCount: 278 },
  { name: "Ceramic Coffee Mug Set", description: "Set of 6 elegant ceramic mugs", highlights: ["Food safe", "Set of 6", "Microwave safe"], category: "Kitchen", emoji: "☕", price: 449, originalPrice: 899, badge: "HOMELY", ratings: 4.5, reviewCount: 156 },
  { name: "Men's Running Shoes", description: "Lightweight shoes with cushioning", highlights: ["Mesh upper", "EVA foam", "Anti-slip sole"], category: "Footwear", emoji: "👟", price: 1499, originalPrice: 2999, badge: "SPORT", ratings: 4.6, reviewCount: 389 },
  { name: "Smart LED Desk Lamp", description: "Eye-care LED with touch control", highlights: ["Eye-care LED", "Touch dimmer", "USB charging"], category: "Electronics", emoji: "💡", price: 899, originalPrice: 1799, badge: "SMART", ratings: 4.3, reviewCount: 201 },
  { name: "Cotton Bedsheet Set", description: "Pure cotton double bedsheet set", highlights: ["Pure cotton", "Double bed", "2 pillow covers"], category: "Home", emoji: "🛏️", price: 699, originalPrice: 1399, badge: "COMFORT", ratings: 4.7, reviewCount: 523 }
];

module.exports = async function seed() {
  try {
    const adminExists = await User.findOne({ email: process.env.ADMIN_EMAIL || 'admin@qwiklo.com' });
    if (!adminExists) {
      await User.create({
        name: 'Qwiklo Admin',
        email: process.env.ADMIN_EMAIL || 'admin@qwiklo.com',
        password: process.env.ADMIN_PASSWORD || 'Admin@123',
        role: 'admin'
      });
      console.log('✅ Admin created');
    }
    const productCount = await Product.countDocuments();
    if (productCount === 0) {
      await Product.insertMany(products);
      console.log('✅ Products seeded');
    }
  } catch (err) {
    console.error('Seed error:', err.message);
  }
};
