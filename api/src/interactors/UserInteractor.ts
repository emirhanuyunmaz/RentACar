import { inject, injectable } from 'inversify';
import { User } from '../entities/User';
import { IUserInteractor } from '../interfaces/IUserInteractor';
import { IUserRepository } from '../interfaces/IUserRepository';
import { INTERFACE_TYPE } from '../utils/appConsts';
import { IToken } from '../interfaces/IToken';

@injectable()
export class UserInteractor implements IUserInteractor {
  private readonly repository: IUserRepository;
  private readonly token: IToken;

  constructor(
    @inject(INTERFACE_TYPE.UserRepository) repository: IUserRepository,
    @inject(INTERFACE_TYPE.Token) token: IToken
  ) {
    this.repository = repository;
    this.token = token;
  }

  async loginUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<String | undefined> {
    const data = await this.repository.loginUser({ email, password });
    if (data) {
      console.log('data', data);

      const userToken = this.token.createToken({
        id: data.id!,
        admin: data.isAdmin,
      });
      return userToken;
    }
    return undefined;
  }

  async createUser(data: User): Promise<Boolean> {
    return await this.repository.createUser(data);
  }
  async findUser(id: string): Promise<User> {
    return await this.repository.findUser(id);
  }

  async updateUser({ id, data }: { id: String; data: User }): Promise<User> {
    return await this.repository.updateUser({ id, data });
  }

  async deleteUser(id: number): Promise<User> {
    return await this.repository.deleteUser(id);
  }

  async getAllUser(page: number): Promise<User[]> {
    return await this.repository.getAllUser(page);
  }

  async userCount(): Promise<Number> {
    return await this.repository.userCount();
  }
}
