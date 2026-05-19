import Categoria from '../models/Categoria.js';

export const getCategorias = async (req, res) => {
  const categorias = await Categoria.find();
  res.json({ ok: true, total: categorias.length, categorias });
};

export const getCategoriaById = async (req, res) => {
  const categoria = await Categoria.findById(req.params.id);
  if (!categoria) return res.status(404).json({ ok: false, mensaje: 'Categoría no encontrada' });
  res.json({ ok: true, categoria });
};

export const createCategoria = async (req, res) => {
  const { nombre, descripcion } = req.body;
  if (!nombre) return res.status(400).json({ ok: false, mensaje: 'nombre es obligatorio' });
  const categoria = await Categoria.create({ nombre, descripcion });
  res.status(201).json({ ok: true, mensaje: 'Categoría creada', categoria });
};

export const updateCategoria = async (req, res) => {
  const categoria = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!categoria) return res.status(404).json({ ok: false, mensaje: 'Categoría no encontrada' });
  res.json({ ok: true, mensaje: 'Categoría actualizada', categoria });
};

export const deleteCategoria = async (req, res) => {
  const categoria = await Categoria.findByIdAndDelete(req.params.id);
  if (!categoria) return res.status(404).json({ ok: false, mensaje: 'Categoría no encontrada' });
  res.json({ ok: true, mensaje: 'Categoría eliminada', categoria });
};