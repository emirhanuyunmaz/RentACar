import { User } from '../entities/User';
import { IUserRepository } from '../interfaces/IUserRepository';
import db from '../../dbConnection';
import { injectable } from 'inversify';

@injectable()
export class UserRepository implements IUserRepository {
  async createUser({
    name,
    surname,
    email,
    password,
    gender,
  }: User): Promise<Boolean> {
    try {
      await db('users').insert({ name, surname, email, password, gender });
      return true;
    } catch (Err) {
      return false;
    }
  }

  async findUser(id: string): Promise<User> {
    const data = await db('users').where('id', id).first();
    return data;
  }

  async loginUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<User> {
    const data = await db('users')
      .where('email', email)
      .where('password', password)
      .first();
    return data;
  }

  async updateUser({ id, data }: { id: String; data: User }): Promise<User> {
    const user = await db('users').where('id', id).first();
    if (user) {
      await db('users').where('id', id).update(data);
      return data;
    }
    throw new Error('User Not Found');
  }

  async getAllUser(page: number, searchText: string): Promise<User[]> {
    const limit = 5;
    if (page) {
      const data = await db('users')
        .orderBy('created_at')
        .where(function () {
          this.where('name', 'like', `%${searchText}%`).orWhere(
            'surname',
            'like',
            `%${searchText}%`
          );
        })
        .offset((page - 1) * limit)
        .limit(limit);
      return data;
    } else {
      const data = await db('users')
        .orderBy('created_at')
        .where(function () {
          this.where('name', 'like', `%${searchText}%`).orWhere(
            'surname',
            'like',
            `%${searchText}%`
          );
        })
        .offset(0 * limit)
        .limit(limit);
      return data;
    }
  }

  async deleteUser(id: number): Promise<User> {
    const user = await db('users').where('id', id).first();
    if (user) {
      await db('users').where('id', id).first().del();
    } else {
      throw Error('User Not Found');
    }
    return user;
  }
  async userCount(searchText: string): Promise<Number> {
    const count = await db('users')
      .where(function () {
        this.where('name', 'like', `%${searchText}%`).orWhere(
          'surname',
          'like',
          `%${searchText}%`
        );
      })
      .count<Record<string, { total: number }>>('id as total');
    return count[0]['total'];
  }
}
