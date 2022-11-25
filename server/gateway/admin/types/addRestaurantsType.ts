import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

const addRestaurantsType = new GraphQLObjectType({
  name: 'addRestaurantsType',
  fields: () => ({
    message: { type: GraphQLString },
    statusCode: { type: GraphQLInt },
  }),
});

export default addRestaurantsType;
