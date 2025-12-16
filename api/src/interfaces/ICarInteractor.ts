import { Car } from '../entities/Car';
import { CarEquipment } from '../entities/CarEquipment';
import { CarImages } from '../entities/CarImages';

export interface ICarInteractor {
  createCar(
    car: Car,
    images: CarImages[],
    car_equipment: CarEquipment[]
  ): Promise<Boolean>;
  getCar(id: string): Promise<Car>;
  deleteCar(id: string): Promise<Boolean>;
  updateCar(car: Car): Promise<Car>;
  listCar(): Promise<Car[] | []>;
  getEquipmentList(): Promise<CarEquipment[]>;
}
