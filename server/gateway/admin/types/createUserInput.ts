import {
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';

const location = new GraphQLInputObjectType({
  name: 'location',
  fields: () => ({
    type: {
      type: GraphQLString,
    },
    coordinates: {
      type: new GraphQLList(GraphQLString),
    },
    is_location_exact: {
      type: GraphQLBoolean,
    },
  }),
});

export const addressType = new GraphQLInputObjectType({
  name: 'addressType',
  fields: () => ({
    street: {
      type: GraphQLString,
    },
    suburb: {
      type: GraphQLString,
    },

    market: {
      type: GraphQLString,
    },
    country: {
      type: GraphQLString,
    },
    country_code: {
      type: GraphQLString,
    },
    location: {
      type: location,
    },
  }),
});

const contactType = new GraphQLInputObjectType({
  name: 'contactType',
  fields: () => ({
    contact: {
      type:new  GraphQLList(GraphQLInt),
    },
    
  }),
});

const createUserInput = new GraphQLInputObjectType({
  name: 'createUserInput',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    contact: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
    },
    password: {
      type:GraphQLString
    },
    address: {
     type:addressType
    },
    profile_img: {
      type: GraphQLString,
    },
  }),
});

export default createUserInput;
