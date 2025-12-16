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
    car_equipment: CarEquipment[]
  ): Promise<Boolean> {
    return this.repository.createCar(car, images, car_equipment);
  }

  async getEquipmentList(): Promise<CarEquipment[]> {
    return await this.repository.getEquipmentList();
  }
  getCar(id: string): Promise<Car> {
    throw new Error('Method not implemented.');
  }
  deleteCar(id: string): Promise<Boolean> {
    throw new Error('Method not implemented.');
  }
  updateCar(car: Car): Promise<Car> {
    throw new Error('Method not implemented.');
  }
  async listCar(): Promise<Car[] | []> {
    const cc = await this.repository.listCar();
    console.log('DDDDDDD:', cc);

    return cc;
  }
}
