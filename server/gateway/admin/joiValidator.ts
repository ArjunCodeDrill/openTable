
import joi from 'joi';

export const createUserValidation = joi.object({
  name: joi.string().min(5).max(30).required(),
  email: joi.string().email().min(5).max(50).required(),
  contact: joi.array().items(
    joi
      .string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required()
      .label('contact')
  ),
  password: joi
    .string()
    .min(8)
    .max(15)
    .regex(/^[a-zA-Z0-9!@#$%&*]{3,25}$/)
    .label('password'),
  address: {
    street: joi.string().min(5).max(50).optional(),
    suburb: joi.string().min(5).max(50).optional(),

    market: joi.string().min(5).max(50).optional(),
    country: joi.string().min(5).max(50).optional(),
    country_code: joi.string().min(2).max(10).optional(),
    location: {
      type: joi.string().min(5).max(50).optional(),
      coordinates: joi.array().items(joi.number()).optional(),
      is_location_exact: joi.boolean().optional(),
    },
  },
  profile_img: joi.string().optional(),
});

export const restaurantValidation = joi.object({
  name: joi.string().min(5).max(30).required(),
  managers: joi.array().items(joi.string().required().label('managers')),
  email: joi.string().email().min(5).max(50).required(),
  url: joi.string().min(10).max(30).required(),
  contact_no: joi.array().items(
    joi
      .string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required()
      .label('contact')
  ),
  description: joi.string().min(50).max(300).required(),
  address: {
    street: joi.string().min(5).max(50).optional(),
    suburb: joi.string().min(5).max(50).optional(),

    market: joi.string().min(5).max(50).optional(),
    country: joi.string().min(5).max(50).optional(),
    country_code: joi.string().min(2).max(10).optional(),
    location: {
      type: joi.string().min(5).max(50).optional(),
      coordinates: joi.array().items(joi.number()).optional(),
      is_location_exact: joi.boolean().optional(),
    },
  },
  total_employees: joi.number().max(50).optional(),
  logo: joi.string().optional(),

  timings: {
    opening: joi.date().iso().required(),
    closing: joi.date().iso().required(),
  },
  banners: joi.array().items(joi.string().required().label('banners')),
});
