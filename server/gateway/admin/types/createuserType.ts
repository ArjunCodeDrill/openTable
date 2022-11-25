import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

const createuserType = new GraphQLObjectType({
  name: 'createuserType',
  fields: () => ({
    message: { type: GraphQLString },
    statusCode: { type: GraphQLInt },
  }),
});

export default createuserType;
