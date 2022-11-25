import { Schema, model } from 'mongoose';

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    managers: [Schema.Types.ObjectId],
    email: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
    contact_no: [Number],
    description: {
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
          require: true,
        },
      },
    },
    total_employees: {
      type: Number,
      require: true,
    },
    logo: {
      type: String,
      require: true,
    },

    timings: {
      opening: {
        type: Date,
        require: true,
      },
      closing: {
        type: Date,
        require: true,
      },
    },
    banners: [String],
  },

  {
    timestamps: true,
  }
);

const restaurantModel = model('restaurant', restaurantSchema);

export default restaurantModel;
