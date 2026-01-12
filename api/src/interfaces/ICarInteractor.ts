import { Car } from '../entities/Car';
import { CarEquipment } from '../entities/CarEquipment';
import { CarImages } from '../entities/CarImages';

export interface ICarInteractor {
  createCar(
    car: Car,
    images: CarImages[],
    car_equipment: String[]
  ): Promise<Boolean>;
  getCar(id: number): Promise<Car | undefined>;
  deleteCar(id: number): Promise<Boolean>;
  updateCar(
    id: number,
    car: Car,
    carEquipment: CarEquipment[],
    images: CarImages[]
  ): Promise<Car>;
  listCar(): Promise<Car[] | []>;
  getEquipmentList(): Promise<CarEquipment[]>;
  getAllCars(page: number): Promise<Car[]>;
  carCount(): Promise<Number>;
  getCarImageList(id:number):Promise<CarImages[]>
  deleteCarImage(imageName: String): Promise<Boolean>;
}
