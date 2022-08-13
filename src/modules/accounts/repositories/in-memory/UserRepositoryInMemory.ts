import { ICreateUserDTO } from 'modules/accounts/dtos/ICreateUserDTO';
import { IUserRepository } from '../IUserRepository';

class UserRepositoryInMemory implements IUserRepository {
  users = [];

  async create({ email, name, password }: ICreateUserDTO): Promise<void> {
    this.users.push({ email, name, password });
  }
}

export { UserRepositoryInMemory };
