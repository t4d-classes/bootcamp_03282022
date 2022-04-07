import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    message: String
    luckyNum: Int
    pi: Float
    graphqlIsCool: Boolean
    author: Author
  }


  type Author {
      id: ID
      firstName: String
      lastName: String
      phoneNumber: String
  }
`;
