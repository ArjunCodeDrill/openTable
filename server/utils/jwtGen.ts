import jwt from 'jsonwebtoken';

const jwtGen = (secret: any) => {
  const SECRET: any = process.env.SECRET_KEY;
  const token = jwt.sign(secret, SECRET);
  return token;
};

export default jwtGen;
