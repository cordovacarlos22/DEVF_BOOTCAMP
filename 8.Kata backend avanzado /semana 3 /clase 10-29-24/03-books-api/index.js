import express from 'express';
import { connect } from './config/db.js';
import BookRoutes from './routes/book.route.js'

const PORT = process.env.PORT || 3001; // PORT is default 3000 IF not PORT specified

const app = express();

app.use(express.json());

// routes 
//EXAMPLE :  APP.USE("/api/v1","NAME OF ROUTE ");
app.use('/api/v1/books', BookRoutes);

connect().then(() => {
  // start server
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT} 🚀`);
  });
})

