
import express from 'express';

// import { createCar } from "../controllers/Car.controller";
import * as CarController from "../controllers/Car.controller.js";

const router = express.Router();

// POST /api/cars
router.post('/cars', CarController.createCar);
router.get('/cars', CarController.getAllCars);
router.get('/cars/:carId', CarController.getCarById);
router.patch('/cars/:carId', CarController.updateCarById);
router.delete('/cars/:carId', CarController.deleteCarById);

export default router;

