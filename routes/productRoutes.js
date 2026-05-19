import { Router } from 'express';
import {
  getProductos,
  getProductoById,
  getProductosByCategoria,
  createProducto,
  updateProducto,
  deleteProducto,
} from '../controllers/product.controller.js';

const router = Router();

// GET    /api/productos                        → listar todos
// GET    /api/productos/:id                    → obtener por id
// GET    /api/productos/categoria/:categoriaId → filtrar por categoría
// POST   /api/productos                        → crear
// PUT    /api/productos/:id                    → actualizar
// DELETE /api/productos/:id                    → eliminar

router.get('/categoria/:categoriaId', getProductosByCategoria);
router.get('/',     getProductos);
router.get('/:id',  getProductoById);
router.post('/',    createProducto);
router.put('/:id',  updateProducto);
router.delete('/:id', deleteProducto);

export default router;