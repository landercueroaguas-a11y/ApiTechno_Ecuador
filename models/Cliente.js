import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
  nombre:   { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  telefono: { type: String, default: '' },
  ciudad:   { type: String, default: '' },
}, { timestamps: true });

export default mongoose.model('Cliente', clienteSchema);