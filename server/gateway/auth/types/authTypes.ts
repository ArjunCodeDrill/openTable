import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';


const authTypes = new GraphQLObjectType({
  name: 'authTypes',
  fields: () => ({
    token: { type: GraphQLString },
    message: { type: GraphQLString },
    statusCode: { type: GraphQLInt },
    role: { type: GraphQLString },
  }),
});

export default authTypes;
