import userModel from '@server/dataBase/models/userSchema';
import jwtGen from '@server/utils/jwtGen';

const auth = async (parents: unknown, args: any, context: any) => {
  const { email, password } = args.input;
  const { id } = context;

  const result: any = await userModel.findOne({
    email,
  });

  if (!result) {
    return {
      message: 'User not found',
      statusCode: 404,
    };
  }
  if (result.password != password) {
    return {
      message: 'invalid credentials',
      statusCode: 400,
    };
  } else if (result.isDeleted === true) {
    return {
      message: 'Account Deleted',
      statusCode: 400,
    };
  } else {
    const { role, id } = result;

    const token = await jwtGen({ role, id });
    return {
      token,
      message: 'successfully login',
      role: role,
      statusCode: 200,
    };
  }
};

export default auth;
