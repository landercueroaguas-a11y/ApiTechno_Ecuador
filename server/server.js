import conectarDB from '../db/conexion.js';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import colors from 'colors';
import { fileURLToPath } from 'url';
import { dirname, join }  from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));


import productRoutes  from '../routes/productRoutes.js';
import categoryRoutes from '../routes/categoryRoutes.js';
import clientRoutes   from '../routes/clientRoutes.js';

dotenv.config();

class Server {
  constructor() {
    this.app  = express();
    this.port = process.env.PORT || 3000;

    this.paths = {
      productos:  '/api/productos',
      categorias: '/api/categorias',
      clientes:   '/api/clientes',
    };

    this.middlewares();
    this.routes();
    conectarDB();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static(join(__dirname, '../Public')));
  }

  routes() {
    this.app.use(this.paths.productos,  productRoutes);
    this.app.use(this.paths.categorias, categoryRoutes);
    this.app.use(this.paths.clientes,   clientRoutes);

    this.app.get('/', (req, res) => {
      res.json({
        empresa:     'TechStore Ecuador',
        descripcion: 'API REST para gestión de tienda de electrónica',
        version:     '1.0.0',
        endpoints: {
          productos:  '/api/productos',
          categorias: '/api/categorias',
          clientes:   '/api/clientes',
        },
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('================================='.cyan);
      console.log('  TechStore Ecuador - API REST'.white.bold);
      console.log('================================='.cyan);
      console.log(`  Puerto: ${this.port}`.green);
      console.log(`  URL: http://localhost:${this.port}`.yellow);
      console.log('================================='.cyan);
    });
  }
}

export default Server;