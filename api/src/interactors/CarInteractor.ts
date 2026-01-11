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
  async getCar(id: string): Promise<Car | undefined> {
    return await this.repository.getCar(id);
  }
  deleteCar(id: string): Promise<Boolean> {
    throw new Error('Method not implemented.');
  }
  async updateCar(id:number , car: Car,carEquipment:CarEquipment[],images:CarImages[]): Promise<Car> {
    return await this.repository.updateCar(id,car,carEquipment,images)
  }
  async listCar(): Promise<Car[] | []> {
    const cc = await this.repository.listCar();
    return cc;
  }
  async getAllCars(page: number): Promise<Car[]> {
    return await this.repository.getAllCars(page);
  }
  
  async carCount(): Promise<Number> {
    return await this.repository.carCount();
  }
  async deleteCarImage(imageName: String): Promise<Boolean> {
    return await this.repository.deleteCarImage(imageName)
  }
}
