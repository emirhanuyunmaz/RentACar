import { User } from '../entities/User';

interface IAdminRepository {
  createUser(user: User): Promise<User>;
  getUserList({
    page,
    sort,
    length,
  }: {
    page: number;
    sort: 'name' | 'time' | 'process';
    length: string;
  }): Promise<User>;
}
