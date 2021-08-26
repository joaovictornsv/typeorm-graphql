import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { connectToDatabase } from './database';
import { userResolver as resolvers } from './graphql/user-resolver';
import { userSchema as typeDefs } from './graphql/user-schema';

async function startServer() {
  await connectToDatabase();

  const server = new ApolloServer({
    resolvers,
    typeDefs,
  });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

startServer();
