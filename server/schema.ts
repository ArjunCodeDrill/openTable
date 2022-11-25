import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { adminMutation, adminQuery } from './gateway/admin/schema';
import { authMutation } from './gateway/auth/schema';

const query = new GraphQLObjectType({
  name: 'query',
  fields: () => ({
    ...adminQuery,
  }),
});

const mutation = new GraphQLObjectType({
  name: 'Mutataion',
  fields: () => ({
    ...adminMutation,
    ...authMutation
  }),
});
export const schema = new GraphQLSchema({
  query,
  mutation,
});
