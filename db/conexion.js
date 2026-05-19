import mongoose from 'mongoose';

const conectarDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`  MongoDB conectado: ${conn.connection.host}`.green);
  } catch (error) {
    console.error(`  Error de conexión: ${error.message}`.red);
    process.exit(1);
  }
};

export default conectarDB;