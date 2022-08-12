import { Router } from 'express';

import { AuthenticateUserController } from '../../../../modules/accounts/useCases/AuthenticateUser/AuthenticateUserController';
import { RefreshTokenController } from '../../../../modules/accounts/useCases/RefreshToken/RefreshTokenController';

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

authenticateRoutes.post('/sessions', authenticateUserController.handle);

authenticateRoutes.post('/refreshToken', refreshTokenController.handle);

export { authenticateRoutes };
