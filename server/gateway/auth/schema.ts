import auth from '../auth/resolver/auth';
import authTypes from '../auth/types/authTypes';
import authInput from '../auth/types/authInputst';


export const authQuery = {
 
};

export const authMutation = {
  authLogin: {
    type: authTypes,
    args: {
      input: {
        type: authInput,
      },
    },
    resolve: auth,
  },
};
