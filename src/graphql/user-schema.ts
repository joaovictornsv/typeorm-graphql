import { gql } from 'apollo-server';

const userSchema = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    city: String
  }

  input UserInput {
    name: String!
    email: String!
    city: String
  }

  type Query {
    user(id: ID!): User
    users: [User]
  }

  type Mutation {
    createUser(data: UserInput!): User
  }
`;

export { userSchema };
