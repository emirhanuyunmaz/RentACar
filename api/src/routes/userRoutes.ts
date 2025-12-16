import express from 'express';
import { Container } from 'inversify';
import { IUserInteractor } from '../interfaces/IUserInteractor';
import { IUserRepository } from '../interfaces/IUserRepository';
import { INTERFACE_TYPE } from '../utils/appConsts';
import { UserRepository } from '../repository/UserRepository';
import { UserInteractor } from '../interactors/UserInteractor';
import { UserController } from '../controllers/UserController';
import { Token } from '../external-libraries/Token';
import { IToken } from '../interfaces/IToken';
import { AuthControl } from '../middleware/AuthControl';
import { IAuthMiddleware } from '../interfaces/IAuthMiddleware';
import { AuthMiddlewareInteractor } from '../interactors/AuthMiddlewareInteractor';

const container = new Container();

container.bind<IToken>(INTERFACE_TYPE.Token).to(Token);

container
  .bind<IUserRepository>(INTERFACE_TYPE.UserRepository)
  .to(UserRepository);

container
  .bind<IAuthMiddleware>(INTERFACE_TYPE.AuthMiddlewareInteractor)
  .to(AuthMiddlewareInteractor);

container
  .bind<IUserInteractor>(INTERFACE_TYPE.UserInteractor)
  .to(UserInteractor);

container.bind(INTERFACE_TYPE.AuthControl).to(AuthControl);

container.bind(INTERFACE_TYPE.UserController).to(UserController);

const router = express.Router();

const authControl = container.get<AuthControl>(INTERFACE_TYPE.AuthControl);
const controller = container.get<UserController>(INTERFACE_TYPE.UserController);

router.post('/create', controller.onCreateUser.bind(controller));
router.post('/login', controller.onLoginUser.bind(controller));
router.get(
  '/profile',
  authControl.tokenControl.bind(authControl),
  controller.onUserProfile.bind(controller)
);
router.put(
  '/update',
  authControl.tokenControl.bind(authControl),
  controller.onUpdateUser.bind(controller)
);
router.get(
  '/getAllUser',
  authControl.tokenControl.bind(authControl),
  controller.getAllUser.bind(controller)
);

export default router;
