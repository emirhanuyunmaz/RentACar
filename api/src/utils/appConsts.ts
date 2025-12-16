export const INTERFACE_TYPE = {
  UserRepository: Symbol.for('UserRepository'),
  CarRepository: Symbol.for('CarRepository'),

  UserInteractor: Symbol.for('UserInteractor'),
  CarInteractor: Symbol.for('CarInteractor'),

  UserController: Symbol.for('UserController'),
  CarController: Symbol.for('CarController'),

  AuthControl: Symbol.for('AuthControl'),
  Token: Symbol.for('Token'),
  AuthMiddlewareInteractor: Symbol.for('AuthMiddlewareInteractor'),
  IImagesProcess: Symbol.for('IImagesProcess'),
};
