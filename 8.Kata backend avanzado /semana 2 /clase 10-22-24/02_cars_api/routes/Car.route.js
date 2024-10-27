
import express from 'express';

// import { createCar } from "../controllers/Car.controller";
import * as CarController from "../controllers/Car.controller.js";

const router = express.Router();

// POST /api/cars
router.post('/cars', CarController.createCar);

export default router;

