import { ResultType } from '@remix-run/router/dist/utils';
import validator from 'validator';
import userModel from '../../../dataBase/models/userSchema';
import { createUserValidation } from '../joiValidator';
import { number, string } from 'joi';
import { createUserType } from '../types';

interface message {
  message: String;
  statusCode: Number;
}

const createUser = async (parents: unknown, args: createUserType, context: any): Promise<message> => {
  try {
    const { role, id } = context;
    const { input } = args;

    await createUserValidation.validateAsync(input, { errors: { label: 'key', wrap: { label: false } } });

    if (!role || !id || role !== 'admin') {
      return {
        message: 'Unauthorized user',
        statusCode: 401,
      };
    }

    const user = await userModel.findOne({ email: input.email });

    if (user) {
      return {
        message: 'User is already exist',
        statusCode: 400,
      };
    } else {
      const result = new userModel(input);
      await result.save();

      return { message: 'User created successfully', statusCode: 200 };
    }
  } catch (e: any) {
    if (e.details[0].message) {
      return { message: e.details[0].message, statusCode: 500 };
    } else {
      return { message: 'Server error', statusCode: 500 };
    }
  }
};

export default createUser;
