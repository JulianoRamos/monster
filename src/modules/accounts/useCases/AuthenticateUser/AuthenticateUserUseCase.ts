import { injectable } from 'tsyringe';

interface Request {
  email: string;
  password: string;
}

@injectable()
class AuthenticateUserUseCase {
  async execute({ email, password }: Request): Promise<string> {
    return '';
  }
}

export { AuthenticateUserUseCase };
