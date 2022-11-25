import createUser from './resolver/createUser';
import createUserInput from './types/createUserInput';
import createuserType from './types/createuserType';
import getUser from './resolver/getUser';
import getUserType from './types/getUserType';
import auth from '../auth/resolver/auth';
import authTypes from '../auth/types/authTypes';
import authInput from '../auth/types/authInputst';
import addRestaurants from './resolver/addRestaurants';
import addRestaurantsType from './types/addRestaurantsType';
import addRestaurantsInputs from './types/addRestaurantsInputs';

export const adminQuery = {
  getUser: {
    type: getUserType,
    resolve: createUser,
  },
};

export const adminMutation = {
  createUser: {
    type: createuserType,
    args: {
      input: {
        type: createUserInput,
      },
    },
    resolve: createUser,
  },

  authLogin: {
    type: authTypes,
    args: {
      input: {
        type: authInput,
      },
    },
    resolve: auth,
  },
  addRestaurants: {
    type: addRestaurantsType,
    args: {
      input: {
        type: addRestaurantsInputs,
      },
    },
    resolve: addRestaurants,
  },
};
