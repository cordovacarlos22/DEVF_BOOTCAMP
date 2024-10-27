import Car from './../models/Car.model.js';

//! create 
 const createCar = async (req, res) => {
  try {
    const car = await Car.create(req.body);
    res.status(201).json(car);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//! read

//! update 

//! delete


export {
  createCar,
  
}