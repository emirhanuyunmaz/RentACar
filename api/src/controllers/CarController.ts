import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { ICarInteractor } from '../interfaces/ICarInteractor';
import { INTERFACE_TYPE } from '../utils/appConsts';
import { IImagesProcess } from '../interfaces/IImagesProcess';
import { imageFormated } from '../utils/ImageMiddleware';
import { CarEquipment } from '../entities/CarEquipment';

@injectable()
export class CarController {
  private readonly interactor: ICarInteractor;
  private readonly imagesProcess: IImagesProcess;

  constructor(
    @inject(INTERFACE_TYPE.CarInteractor) interactor: ICarInteractor,
    @inject(INTERFACE_TYPE.IImagesProcess) imagesProcess: IImagesProcess
  ) {
    this.interactor = interactor;
    this.imagesProcess = imagesProcess;
  }

  async adminDeneme(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      return res.status(200).json({ message: 'success' });
    } catch (err) {
      next(err);
    }
  }

  async getCarList(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const data = await this.interactor.listCar();
      return res.status(200).json({ message: 'success', data });
    } catch (err) {
      next(err);
    }
  }

  async onCreateCar(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const imageNameList = await this.imagesProcess.uploadMultiImage(
        req.files! as Express.Multer.File[]
      );

      await this.interactor.createCar(
        req.body,
        imageFormated(imageNameList),
        req.body.carEquipment
      );

      return res.status(200).json({ message: 'CAR SUCCES' });
    } catch (err) {
      next(err);
    }
  }

  async getEquipmentList(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const data = await this.interactor.getEquipmentList();
      return res.status(200).json({ message: 'success', data });
    } catch (err) {
      next(err);
    }
  }

  async getAllCars(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const page = Number(req.query.page);
      const data = await this.interactor.getAllCars(page);
      const count = await this.interactor.carCount();
      return res.status(200).json({ message: 'Success', data, count });
    } catch (err) {
      next(err);
    }
  }

  async adminGetCar(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const id = req.query.id;
      if (id) {
        const data = await this.interactor.getCar(id as string);
        return res.status(200).json({ data });
      } else {
        return res.status(404).json({ message: 'Car not found !' });
      }
    } catch (err) {
      next(err);
    }
  }

  async adminUpdateCar(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { id } = req.body;
      const carEquipment: CarEquipment[] = req.body.carEquipment.map(
        (carEq: string) => JSON.parse(carEq)
      );

      const imageNameList = await this.imagesProcess.uploadMultiImage(
        req.files! as Express.Multer.File[]
      );

      await this.interactor.updateCar(
        id,
        req.body,
        carEquipment,
        imageFormated(imageNameList)
      );
      return res.status(201).json({ message: 'Car Update Success' });
    } catch (err) {
      next(err);
    }
  }

  async adminDeleteCarImage(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { imageName } = req.body;
      const imageIsDelete = await this.interactor.deleteCarImage(imageName);
      if (imageIsDelete) {
        this.imagesProcess.deleteSingleImage(imageName + '.png');
      }
      res.status(201).json({ message: 'Image Delete Success' });
    } catch (err) {
      next(err);
    }
  }
}
