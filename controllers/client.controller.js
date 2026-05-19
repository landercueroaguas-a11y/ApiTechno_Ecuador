import Cliente from '../models/Cliente.js';

export const getClientes = async (req, res) => {
  const clientes = await Cliente.find();
  res.json({ ok: true, total: clientes.length, clientes });
};

export const getClienteById = async (req, res) => {
  const cliente = await Cliente.findById(req.params.id);
  if (!cliente) return res.status(404).json({ ok: false, mensaje: 'Cliente no encontrado' });
  res.json({ ok: true, cliente });
};

export const createCliente = async (req, res) => {
  const { nombre, email, telefono, ciudad } = req.body;
  if (!nombre || !email) return res.status(400).json({ ok: false, mensaje: 'nombre y email son obligatorios' });
  const existe = await Cliente.findOne({ email });
  if (existe) return res.status(400).json({ ok: false, mensaje: 'Email ya registrado' });
  const cliente = await Cliente.create({ nombre, email, telefono, ciudad });
  res.status(201).json({ ok: true, mensaje: 'Cliente creado', cliente });
};

export const updateCliente = async (req, res) => {
  const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!cliente) return res.status(404).json({ ok: false, mensaje: 'Cliente no encontrado' });
  res.json({ ok: true, mensaje: 'Cliente actualizado', cliente });
};

export const deleteCliente = async (req, res) => {
  const cliente = await Cliente.findByIdAndDelete(req.params.id);
  if (!cliente) return res.status(404).json({ ok: false, mensaje: 'Cliente no encontrado' });
  res.json({ ok: true, mensaje: 'Cliente eliminado', cliente });
};