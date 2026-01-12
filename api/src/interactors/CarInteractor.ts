import { inject, injectable } from 'inversify';
import { Car } from '../entities/Car';
import { CarImages } from '../entities/CarImages';
import { ICarInteractor } from '../interfaces/ICarInteractor';
import { ICarRepository } from '../interfaces/ICarRepositoy';
import { INTERFACE_TYPE } from '../utils/appConsts';
import { CarEquipment } from '../entities/CarEquipment';

@injectable()
export class CarInteractor implements ICarInteractor {
  private readonly repository: ICarRepository;

  constructor(
    @inject(INTERFACE_TYPE.CarRepository) repository: ICarRepository
  ) {
    this.repository = repository;
  }
  createCar(
    car: Car,
    images: CarImages[],
    car_equipment: String[]
  ): Promise<Boolean> {
    return this.repository.createCar(car, images, car_equipment);
  }

  async getEquipmentList(): Promise<CarEquipment[]> {
    return await this.repository.getEquipmentList();
  }
  async getCar(id: number): Promise<Car | undefined> {
    return await this.repository.getCar(id);
  }
  deleteCar(id: number): Promise<Boolean> {
    return this.repository.deleteCar(id);
  }
  async updateCar(
    id: number,
    car: Car,
    carEquipment: CarEquipment[],
    images: CarImages[]
  ): Promise<Car> {
    return await this.repository.updateCar(id, car, carEquipment, images);
  }
  async listCar(): Promise<Car[] | []> {
    const cc = await this.repository.listCar();
    return cc;
  }
  async getAllCars(page: number, searchText: string): Promise<Car[]> {
    return await this.repository.getAllCars(page, searchText);
  }

  async carCount(searchText: string): Promise<Number> {
    return await this.repository.carCount(searchText);
  }
  async deleteCarImage(imageName: String): Promise<Boolean> {
    return await this.repository.deleteCarImage(imageName);
  }

  async getCarImageList(id: number): Promise<CarImages[]> {
    return await this.repository.getCarImageList(id);
  }

  async searchCar(name: string): Promise<Car[]> {
    return await this.repository.searchCar(name);
  }
}
