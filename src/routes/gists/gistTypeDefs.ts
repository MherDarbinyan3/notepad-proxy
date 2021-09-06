const { gql } = require('apollo-server-express');

export const gistTypeDefs = gql`
  scalar Void

  type Query {
    gists: Void
    gist(id: String): Void
  }
`;
