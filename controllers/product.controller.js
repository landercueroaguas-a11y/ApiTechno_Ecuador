import Producto from '../models/Producto.js';

export const getProductos = async (req, res) => {
  const productos = await Producto.find();
  res.json({ ok: true, total: productos.length, productos });
};

export const getProductoById = async (req, res) => {
  const producto = await Producto.findById(req.params.id);
  if (!producto) return res.status(404).json({ ok: false, mensaje: 'Producto no encontrado' });
  res.json({ ok: true, producto });
};

export const getProductosByCategoria = async (req, res) => {
  const productos = await Producto.find({ categoriaId: req.params.categoriaId });
  res.json({ ok: true, total: productos.length, productos });
};

export const createProducto = async (req, res) => {
  const { nombre, precio, stock, categoriaId, marca } = req.body;
  if (!nombre || precio === undefined || !categoriaId)
    return res.status(400).json({ ok: false, mensaje: 'nombre, precio y categoriaId son obligatorios' });
  const producto = await Producto.create({ nombre, precio, stock, categoriaId, marca });
  res.status(201).json({ ok: true, mensaje: 'Producto creado', producto });
};

export const updateProducto = async (req, res) => {
  const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!producto) return res.status(404).json({ ok: false, mensaje: 'Producto no encontrado' });
  res.json({ ok: true, mensaje: 'Producto actualizado', producto });
};

export const deleteProducto = async (req, res) => {
  const producto = await Producto.findByIdAndDelete(req.params.id);
  if (!producto) return res.status(404).json({ ok: false, mensaje: 'Producto no encontrado' });
  res.json({ ok: true, mensaje: 'Producto eliminado', producto });
};