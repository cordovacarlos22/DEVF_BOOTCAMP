import express from 'express';
import { connect } from './config/db.js';
import BookRoutes from './routes/book.route.js'
import morgan from 'morgan';


const PORT = process.env.PORT || 3000; // PORT is default 3000 IF not PORT specified

const app = express();

app.use(express.json());



// app.use(morgan('tiny'));

// Tokens personalizados de Morgan
morgan.token('body', (req) => JSON.stringify(req.body))
morgan.token('hostname', (req) => req.hostname)
morgan.token('query', (req) => JSON.stringify(req.query))
app.use(morgan(':hostname :method :url :status :query - :response-time ms Body :body'))

// routes 
//EXAMPLE :  APP.USE("/api/v1","NAME OF ROUTE ");
app.use('/api/v1/books', BookRoutes);

connect().then(() => {
  // start server
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT} 🚀`);
  });
})

