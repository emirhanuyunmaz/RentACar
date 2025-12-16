import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { ICarInteractor } from '../interfaces/ICarInteractor';
import { INTERFACE_TYPE } from '../utils/appConsts';
import { IImagesProcess } from '../interfaces/IImagesProcess';
import { imageFormated } from '../utils/ImageMiddleware';

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
      res.status(200).json({ message: 'success' });
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
      // console.log("ADS:",data);

      res.status(200).json({ message: 'succesaaaa', data });
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
      console.log('BODY::', req.body);
      const imageNameList = await this.imagesProcess.uploadMultiImage(
        req.files! as Express.Multer.File[]
      );

      await this.interactor.createCar(
        req.body,
        imageFormated(imageNameList),
        req.body.car_equipment
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
}
