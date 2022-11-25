import { addressType } from './createUserInput';
import { GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';
import { GraphQLDate } from 'graphql-scalars';

const timings = new GraphQLInputObjectType({
  name: 'timingsInputs',
  fields: () => ({
    opening: {
      type: new GraphQLNonNull(GraphQLDate),
    },
    closing: {
      type: new GraphQLNonNull(GraphQLDate),
    },
  }),
});

const addRestaurantsInputs = new GraphQLInputObjectType({
  name: 'addRestaurantsInputs',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    managers: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLID)),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    url: {
      type: new GraphQLNonNull(GraphQLString),
    },
    contact_no: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    address: {
      type: addressType,
    },
    total_employees: {
      type: new GraphQLNonNull(GraphQLString),
    },
    logo: {
      type: new GraphQLNonNull(GraphQLString),
    },

    timings: { type: timings },
    banners: {
      type: new GraphQLList(new GraphQLNonNull(GraphQLString)),
    },
  }),
});

export default addRestaurantsInputs;
