import { onHealthCheck } from './listeners';
import { resolvers } from '../resolvers';
import { typeDefs } from '../typeDefs';

import { GistService } from '../routes/gists/GistService';

const { ApolloServer } = require('apollo-server-express');

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    gistService: new GistService(),
  }),
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    return { token };
  },
  onHealthCheck,
  tracing: true,
});
