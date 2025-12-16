import { inject, injectable } from 'inversify';
import { IToken } from '../interfaces/IToken';
import { INTERFACE_TYPE } from '../utils/appConsts';
import { IAuthMiddleware } from '../interfaces/IAuthMiddleware';

@injectable()
export class AuthMiddlewareInteractor implements IAuthMiddleware {
  private readonly tokenProcess: IToken;

  constructor(@inject(INTERFACE_TYPE.Token) tokenProcess: IToken) {
    this.tokenProcess = tokenProcess;
  }

  authControl({ token }: { token: string }): { id: String; admin: Boolean } {
    return this.tokenProcess.verifyToken(token);
  }
}
