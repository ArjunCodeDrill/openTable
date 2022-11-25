import { string } from 'joi';
import { Schema, model } from 'mongoose';
import validator from 'validator';

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
    },
    contact: [String],
    password: {
      type: String,
      require: true,
    },
    address: {
      street: {
        type: String,
        require: true,
      },
      suburb: {
        type: String,
        require: true,
      },

      market: {
        type: String,
        require: true,
      },
      country: {
        type: String,
        require: true,
      },
      country_code: {
        type: String,
        require: true,
      },
      location: {
        type: {
          type: String,
          require: true,
        },
        coordinates: [String],
        is_location_exact: {
          type: Boolean,
        },
      },
    },
    profile_img: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: true,
      default:"user"
    },
    isDeleted: {
      type: Boolean,
      default: false,
      require: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
      require: true,
    },
    isActivated: {
      type: Boolean,
      default: false,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = model('user', userSchema);

export default userModel;
