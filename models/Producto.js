import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  nombre:      { type: String, required: true },
  precio:      { type: Number, required: true },
  stock:       { type: Number, default: 0 },
  categoriaId: { type: Number, required: true },
  marca:       { type: String, default: '' },
}, { timestamps: true });

export default mongoose.model('Producto', productoSchema);