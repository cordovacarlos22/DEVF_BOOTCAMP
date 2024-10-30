import express from 'express';

import * as BookController from '../controllers/book.controller.js';


const bookRoutes = express.Router();


// CREATE (POST) a book
bookRoutes.post('/', BookController.createBook);


export default bookRoutes;
