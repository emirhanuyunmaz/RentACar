import { User } from '../entities/User';

export interface IUserInteractor {
  createUser(data: User): Promise<Boolean>;
  loginUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<String | undefined>;
  findUser(id: string): Promise<User>;
  deleteUser(): Promise<User>;
  updateUser({ id, data }: { id: String; data: User }): Promise<User>;
  getAllUser(page: number): Promise<User[]>;
  userCount(): Promise<Number>;
}
