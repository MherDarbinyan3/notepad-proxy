import { gistResolvers } from './routes/gists/gistResolvers';

const gmr = require('@wiicamp/graphql-merge-resolvers');

export const resolversArray = [
  gistResolvers,
];

export const resolvers = gmr.merge(resolversArray);
