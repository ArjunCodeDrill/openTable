import restaurantModel from '@server/dataBase/models/restaurantsSchema';
import { restaurantValidation } from '../joiValidator';
import { message } from '../types';

interface addRestaurantTypes {
  input: {
    name: String;
    managers: [String];
    email: String;
    url: String;
    contact_no: [Number];
    description: String;
    address: {
      street: String;
      suburb: String;
      market: String;
      country: String;
      country_code: String;

      location: {
        type: {
          type: String;
          coordinates: [String];
          is_location_exact: Boolean;
        };
      };
    };
    total_employees: String;

    logo: String;

    timings: {
      opening: Date;
      closing: Date;
    };
    banners: [String];
  };
}

const addRestaurants = async (parents: unknown, args: addRestaurantTypes, context: any): Promise<message> => {
  try {
    const { role, id } = context;
    const { input } = args;

    console.log(input);

    await restaurantValidation.validateAsync(input, { errors: { label: 'key', wrap: { label: false } } });

    if (!role || !id || role !== 'admin') {
      return {
        message: 'Unauthorized user',
        statusCode: 401,
      };
    }
    const isRestaurantExist = await restaurantModel.findOne({ email: input.email });
    console.log(isRestaurantExist);
    if (isRestaurantExist) {
      return { message: 'Restaurant already exist', statusCode: 400 };
    } else {
      const addedRestaurant = new restaurantModel(input);
      await addedRestaurant.save();
      return { message: 'Restaurant successfully added', statusCode: 500 };
    }
  } catch (e: any) {
    console.log();
    if (e.details[0].message) {
      return { message: e.details[0].message, statusCode: 500 };
    } else {
      return { message: 'Server error', statusCode: 500 };
    }
  }
};

export default addRestaurants;
