
import dotenv from "dotenv";
import mongoose from "mongoose";

//  inicializar dotenv
dotenv.config();

// Conexión a MongoDB
const connect = async () => {
  try {
    mongoose.connect(process.env.DB_CONNECT_URL) // NOS CONECTAMOS A LA BASE DE DATOS
    const { connection } = await mongoose // traemos la coneccion de mongoose
    connection.once('open', () => {
      console.log('Connected to MongoDB sucessful ✅ ') // si la coneccion se abre , mostramos mensaje 

      connection.on('error', () => {
        console.error('Error connecting to MongoDB ❌ ', error) // si hay un error mostramos el error
      })
    })
  } catch (error) {
    console.error('Error connecting to MongoDB: 🔥  ', error)
  }
}

export { connect }