import { AuthenticationError } from 'apollo-server-express';
import jwt from 'jsonwebtoken';

export const jwtVerify = async (token: any) => {
  const SECRET_KEY: string = process.env.SECRET_KEY!;

  try {
    if (token) {
      const { role, id }: any = jwt.verify(token, SECRET_KEY);

      return { role, id };
    }
  } catch (err) {
    return {
      error: true,
      msg: 'Token Invalid',
    };
  }
};
