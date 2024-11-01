import express from 'express';

import * as BookController from '../controllers/book.controller.js';


const bookRoutes = express.Router();


// CREATE (POST) a book
bookRoutes.post('/', BookController.createBook);
bookRoutes.get('/', BookController.getAllBooks);
bookRoutes.get('/:bookId', BookController.getAllBooks);
bookRoutes.patch('/:bookId', BookController.updateBookById);
bookRoutes.delete('/:bookId', BookController.updateBookById);


export default bookRoutes;
