<<<<<<< HEAD
## Rutas de la API

### Productos
| Método | Ruta                              | Descripción              |
|--------|-----------------------------------|--------------------------|
| GET    | /api/productos                    | Obtener todos            |
| GET    | /api/productos/:id                | Obtener por ID           |
| GET    | /api/productos/categoria/:id      | Filtrar por categoría    |
| POST   | /api/productos                    | Crear producto           |
| PUT    | /api/productos/:id                | Actualizar producto      |
| DELETE | /api/productos/:id                | Eliminar producto        |

### Categorías
| Método | Ruta                  | Descripción          |
|--------|-----------------------|----------------------|
| GET    | /api/categorias       | Obtener todas        |
| GET    | /api/categorias/:id   | Obtener por ID       |
| POST   | /api/categorias       | Crear categoría      |
| PUT    | /api/categorias/:id   | Actualizar categoría |
| DELETE | /api/categorias/:id   | Eliminar categoría   |

### Clientes
| Método | Ruta              | Descripción        |
|--------|-------------------|--------------------|
| GET    | /api/clientes     | Obtener todos      |
| GET    | /api/clientes/:id | Obtener por ID     |
| POST   | /api/clientes     | Crear cliente      |
| PUT    | /api/clientes/:id | Actualizar cliente |
| DELETE | /api/clientes/:id | Eliminar cliente   |

## Estructura del Proyecto

TechStore Ecuador/
├── controllers/
│   ├── product.controller.js
│   ├── category.controller.js
│   └── client.controller.js
├── db/
│   └── conexion.js
├── models/
│   ├── Producto.js
│   ├── Categoria.js
│   └── Cliente.js
├── routes/
│   ├── productRoutes.js
│   ├── categoryRoutes.js
│   └── clientRoutes.js
├── server/
│   └── server.js
├── Public/
│   └── index.html
├── .env.example
├── index.js
└── package.json
9b4e47c8bc80f4fa90b2c518a1febe6e349f07ed

# ApiTechno_Ecuador
CREACION DE UNA API
92d9b993f2ac25a0db549da4d475fec71d173972
