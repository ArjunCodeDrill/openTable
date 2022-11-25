import validator from 'validator';
import userModel from '../../../dataBase/models/userSchema';

const getUser = async (parents: unknown, args: any, context: any) => {
  try {
    return { message: 'User created successfully', statusCode: 200 };
  } catch (e: any) {
    return { message: 'Server Error', statusCode: 500 };
  }
};

export default getUser;
