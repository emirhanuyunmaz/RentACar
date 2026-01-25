import { Car } from '../entities/Car';
import { CarEquipment } from '../entities/CarEquipment';
import { CarImages } from '../entities/CarImages';
import { Category } from '../entities/Category';

export interface ICarRepository {
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
  listCar({
    category,
    page,
  }: {
    category: string;
    page: number;
  }): Promise<Car[] | []>;
  getEquipmentList(): Promise<CarEquipment[]>;
  updateEquipment({
    equipmentId,
    equipmentName,
  }: {
    equipmentId: number;
    equipmentName: string;
  }): Promise<CarEquipment>;
  deleteEquipment(equipmentId: number): Promise<CarEquipment>;
  getCategoryList(): Promise<Category[]>;
  updateCategory({ id, name }: { id: number; name: string }): Promise<Category>;
  deleteCategory({ id }: { id: number }): Promise<Category>;
  getAllCars(page: number, searchText: string): Promise<Car[]>;
  carCount(searchText: string): Promise<Number>;
  getCarImageList(id: number): Promise<CarImages[]>;
  deleteCarImage(imageName: String): Promise<Boolean>;
  getSubCarList({
    page,
    category,
  }: {
    page: number;
    category: string;
  }): Promise<Car[]>;
}
