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
// get all cars 
const getAllCars = async (req, res) => {
  try {
    // const cars = await Car.find({isActive:true}, { model:1,brand:1});
    const cars = await Car.find({ isActive: true });
    res.status(200).json(cars);
  } catch (error) {
    res.status(400).json({ message: `Error getting cars ${error.message}` });
  }

};

// get car by id 
const getCarById = async (req, res) => {
  try {
    // const car = await Car.findById(req.params.carId,{plate:1});
    // const car = await Car.findById(req.params.carId);
    const car = await Car.find({ _id: req.params.carId, isActive: true });
    res.status(200).json(car);
  } catch (error) {
    res.status(400).json({ message: `Error getting car ${error.message}` });
  }
};

//! update 
const updateCarById = async (req, res) => {
  try {
    const updateCar = await Car.findByIdAndUpdate(req.params.carId, req.body, { new: true }); // new true para devolver el documento actualizado,en caso lo devuelve el documento antes de actualizar 
    if (!updateCar) return res.status(404).json({ message: 'Car not found' });
    res.status(200).json(updateCar);
  } catch (error) {
    res.status(400).json({ message: `Error updating car ${error.message}` });
  }
};

//! Delete
const deleteCarById = async (req, res) => {
  // Borrado físico: Voy a comprobar si existe un query string llamado 'destroy' y si su valor es 'true' voy a borrar el resitro de la base de datos. ?destroy=true
  if (req.query.destroy === 'true') {
    try {
      const deletedCar = await Car.findByIdAndDelete(req.params.carId)
      if (deletedCar === null) { // Valido si el carro NO existe
        return res.status(404).json({ message: 'Car not found for Delete' })
      }
      return res.status(204).json()
    } catch (error) {
      return res.status(400).json({ message: 'Error Deleting Car', error })
    }
  }

  // Borrado lógico: Cambio el estado de isActive a false (Update -> findByIdAndUpdate())
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.carId, { isActive: false }, { new: false })
    if (updatedCar === null || updatedCar.isActive === false) { // Valido si el carro NO existe o ya está desactivado
      return res.status(404).json({ message: 'Car not found for Delete' })
    }
    return res.status(204).json()
  } catch (error) {
    return res.status(400).json({ message: 'Error Deleting Car', error })
  }
}


export {
  createCar,
  getAllCars,
  getCarById,
  updateCarById,
  deleteCarById
}