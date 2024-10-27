
import express from 'express'

import { connect } from './config/database.js'

import carRoutes from './routes/Car.route.js'

// Configuración de variables de entorno
const PORT = process.env.PORT || 3000


const app = express()

app.use(express.json()) // Parsear el body de las peticiones a JSON
// Aquí van las rutas
app.use('/api/v1', carRoutes)
// initialize server 

// nos conectamos a la base de datos y luego levantamos el servidor
connect().then(() => {
  // Start the server
  app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT} 🚀`)
  });
});
