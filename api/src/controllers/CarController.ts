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
      const category =
        req.query.category == undefined || req.query.category == 'undefined'
          ? ''
          : req.query.category;
      const page =
        req.query.page == undefined || req.query.page == 'undefined'
          ? 1
          : req.query.page;

      const data = await this.interactor.listCar({
        category: String(category),
        page: Number(page),
      });
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

  async getCar(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const id = req.query.id;
      console.log(id);

      if (id != undefined && id != 'undefined') {
        const data = await this.interactor.getCar(Number(id));
        return res.status(200).json({ data });
      }
      return res.status(404).json({ message: 'Car not found !' });
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
      const searchText = req.query.searchText;
      if (searchText != null) {
        const data = await this.interactor.getAllCars(
          page,
          searchText == 'null' ? '' : (searchText as string)
        );
        const count = await this.interactor.carCount(
          searchText == 'null' ? '' : (searchText as string)
        );
        return res.status(200).json({ message: 'Success', data, count });
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

  async adminDeleteCar(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { id } = req.body;
      const imagesList = await this.interactor.getCarImageList(id);
      const carIsDeleted = await this.interactor.deleteCar(id);
      if (carIsDeleted) {
        imagesList.map((image) => {
          this.imagesProcess.deleteSingleImage(image.name + '.png');
        });
        return res.status(201).json({ message: 'Car Delete Success' });
      } else {
        return res.status(404).json({ message: 'Car is not found' });
      }
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

  async subCarList(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { page, category } = req.query;
      const data = await this.interactor.getSubCarList({
        page: Number(page != undefined && page != 'undefined' ? page : 1),
        category: String(
          category != undefined && category != 'undefined' ? category : ''
        ),
      });
      return res.status(200).json({ data: data, message: 'success' });
    } catch (err) {
      next(err);
    }
  }

  async showCategoryList(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const data = await this.interactor.getCategoryList();
      return res.status(200).json({ message: 'success', data: data });
    } catch (err) {
      next(err);
    }
  }

  async updateCategory(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const isAdmin = req.headers.admin;
      if (isAdmin) {
        const { id, name } = req.body;
        const data = await this.interactor.updateCategory({
          id: id,
          name: name,
        });
        return res.status(201).json({ message: 'success', data: data });
      } else {
        return res.status(401).json({ message: 'User is nor admin !' });
      }
    } catch (err) {
      next(err);
    }
  }

  async deleteCategory(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const isAdmin = req.headers.admin;
      if (isAdmin) {
        const { id } = req.body;
        const data = this.interactor.deleteCategory({ id: id });
        return res.status(201).json({ message: 'success', data: data });
      } else {
        return res.status(401).json({ message: 'User is not admin !' });
      }
    } catch (err) {
      next(err);
    }
  }

  async showEquipmentList(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const data = await this.interactor.getEquipmentList();
      return res.status(201).json({ message: 'Success', data: data });
    } catch (err) {
      next(err);
    }
  }

  async updateEquipment(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const isAdmin = req.headers.admin;
      const { id, name } = req.body;
      if (isAdmin) {
        const data = await this.interactor.updateEquipment({
          equipmentId: id,
          equipmentName: name,
        });
        return res
          .status(201)
          .json({ message: 'Update is success', data: data });
      } else {
        return res.status(401).json({ message: 'User is not admin !' });
      }
    } catch (err) {
      next(err);
    }
  }

  async deleteEquipment(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const isAdmin = req.headers.admin;
      const { id } = req.body;
      if (isAdmin) {
        const data = this.interactor.deleteEquipment(id);
        return res
          .status(201)
          .json({ message: 'Delete equipment is success', data: data });
      } else {
        return res.status(401).json({ message: 'User is not admin !' });
      }
    } catch (err) {
      next(err);
    }
  }
}
