const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  highlights: [String],
  category: { type: String, required: true },
  emoji: { type: String, default: '🛍️' },
  price: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  stock: { type: Number, default: 100 },
  images: [String],
  ratings: { type: Number, default: 4.0 },
  reviewCount: { type: Number, default: 0 },
  badge: { type: String, default: '' },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

productSchema.pre('save', function(next) {
  if (this.originalPrice > 0) {
    this.discount = Math.round(((this.originalPrice - this.price) / this.originalPrice) * 100);
  }
  next();
});

module.exports = mongoose.model('Product', productSchema);
