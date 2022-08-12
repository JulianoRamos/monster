import { Request, Response, Router } from 'express';

const authenticateRoutes = Router();

authenticateRoutes.post('/sessions', (request: Request, response: Response) => {
  const { email, password } = request.body;
  console.log(email, password);

  return response.json({
    token: 'Meu Token',
    refreshToken: 'Meu Refrash Token',
    user: {
      name: 'Juliano Ramos',
      email,
    },
  });
});

authenticateRoutes.post(
  '/refreshToken',
  (request: Request, response: Response) => {
    const token =
      request.body.token ||
      request.headers['x-access-token'] ||
      request.query.token;

    console.log(token);

    return response.json({
      token: 'Meu Token',
      refreshToken: 'Meu Refrash Token',
      user: {
        name: 'Juliano Ramos',
        email: '490meister@gmail.com',
      },
    });
  },
);

export { authenticateRoutes };
