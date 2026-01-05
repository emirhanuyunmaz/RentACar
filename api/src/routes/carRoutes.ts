import express from 'express';
import { Container } from 'inversify';
import { IToken } from '../interfaces/IToken';
import { INTERFACE_TYPE } from '../utils/appConsts';
import { Token } from '../external-libraries/Token';
import { ICarRepository } from '../interfaces/ICarRepositoy';
import { CarRepository } from '../repository/CarRepository';
import { AuthControl } from '../middleware/AuthControl';
import { CarController } from '../controllers/CarController';
import { IAuthMiddleware } from '../interfaces/IAuthMiddleware';
import { AuthMiddlewareInteractor } from '../interactors/AuthMiddlewareInteractor';
import multer from 'multer';
import { ImagesProcess } from '../external-libraries/ImagesProcess';
import { IImagesProcess } from '../interfaces/IImagesProcess';
import { ICarInteractor } from '../interfaces/ICarInteractor';
import { CarInteractor } from '../interactors/CarInteractor';

const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Please upload a valid image file'));
    }
    cb(null, true);
  },
});

const container = new Container();

container.bind<IToken>(INTERFACE_TYPE.Token).to(Token);
container.bind<IImagesProcess>(INTERFACE_TYPE.IImagesProcess).to(ImagesProcess);
container
  .bind<IAuthMiddleware>(INTERFACE_TYPE.AuthMiddlewareInteractor)
  .to(AuthMiddlewareInteractor);

container.bind<ICarRepository>(INTERFACE_TYPE.CarRepository).to(CarRepository);
container.bind<ICarInteractor>(INTERFACE_TYPE.CarInteractor).to(CarInteractor);
container.bind(INTERFACE_TYPE.CarController).to(CarController);
container.bind(INTERFACE_TYPE.AuthControl).to(AuthControl);

const router = express.Router();

const authControl = container.get<AuthControl>(INTERFACE_TYPE.AuthControl);

const controller = container.get<CarController>(INTERFACE_TYPE.CarController);
router.get('/deneme', controller.adminDeneme.bind(controller));
router.get(
  '/getAllCars',
  authControl.tokenControl.bind(authControl),
  controller.getAllCars.bind(controller)
);
router.get('/carList', controller.getCarList.bind(controller));
router.get('/carEquipmentList', controller.getEquipmentList.bind(controller));
router.post(
  '/create',
  authControl.tokenControl.bind(authControl),
  upload.array('images'),
  controller.onCreateCar.bind(controller)
);
router.get(
  '/adminGetCar',
  authControl.tokenControl.bind(authControl),
  controller.adminGetCar.bind(controller)
);

export default router;
