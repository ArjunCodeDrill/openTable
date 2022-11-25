import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

const getUserType = new GraphQLObjectType({
  name: 'getUserType',
  fields: () => ({
    message: { type: GraphQLString },
    statusCode: { type: GraphQLInt },
  }),
});

export default getUserType;
