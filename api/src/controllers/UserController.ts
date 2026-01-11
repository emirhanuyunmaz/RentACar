import { inject, injectable } from 'inversify';
import { IUserInteractor } from '../interfaces/IUserInteractor';
import { INTERFACE_TYPE } from '../utils/appConsts';
import { NextFunction, Request, Response } from 'express';

@injectable()
export class UserController {
  private interactor: IUserInteractor;

  constructor(
    @inject(INTERFACE_TYPE.UserInteractor) interactor: IUserInteractor
  ) {
    this.interactor = interactor;
  }

  async onCreateUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const body = req.body;
      const data = await this.interactor.createUser(body);
      return res.status(201).json({ data });
    } catch (err) {
      next(err);
    }
  }

  async onLoginUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const body = req.body;
      const data = await this.interactor.loginUser(body);
      if (data) {
        return res.status(200).json({ token: data });
      }
      return res
        .status(404)
        .json({ message: 'User Not found try again or register' });
    } catch (err) {
      next(err);
    }
  }

  async onUserProfile(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const id = req.headers.id;
      const data = await this.interactor.findUser(id as string);
      return res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  async onUpdateUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const id = req.headers.id;
      const data = req.body;
      if (id) {
        await this.interactor.updateUser({ id: id as string, data: data });
      } else {
        return res.status(404).json({ message: 'User Error' });
      }

      return res.status(200).json({ messge: 'succes' });
    } catch (err) {
      next(err);
    }
  }

  async getAllUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const isAdmin = req.headers.admin;
      if (isAdmin == 'true') {
        const page = Number(req.query.page);
        const data = await this.interactor.getAllUser(page);
        const count = await this.interactor.userCount();
        return res.status(200).json({ message: 'Success', data, count });
      } else {
        return res.status(401).json({ message: 'ERROR : Not Authorized' });
      }
    } catch (err) {
      next(err);
    }
  }

  async adminGetUserProfile(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const id = req.query.id;
      if (id) {
        const data = await this.interactor.findUser(id as string);
        res.status(200).json({ message: 'Success', data });
      } else {
        res.status(404).json({ message: 'User Not Found ' });
      }
    } catch (err) {
      next(err);
    }
  }

  async adminUpdateUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { id } = req.body;
      const data = req.body;
      if (id) {
        await this.interactor.updateUser({ id: id as string, data: data });
        return res.status(201).json({ message: 'Success' });
      } else {
        return res.status(404).json({ message: 'User Error' });
      }
    } catch (err) {
      next(err);
    }
  }

  async adminDeleteUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { id } = req.body;
      console.log('USER DELETE ID:', id);
      if (id) {
        await this.interactor.deleteUser(id);
        return res.status(201).json({ message: 'User Delete Success' });
      } else {
        return res.status(404).json({ message: 'User not found' });
      }
    } catch (err) {
      next(err);
    }
  }
}
