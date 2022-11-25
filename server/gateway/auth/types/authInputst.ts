import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const authInput = new GraphQLInputObjectType({
  name: 'authInput',
  fields: () => ({
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

export default authInput;
