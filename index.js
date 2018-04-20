const { GraphQLServer } = require('graphql-yoga');

const typeDefs = /* GraphQL */ `
  # @cacheControl doesn't throw an error here
  type Query @cacheControl(maxAge: 60) {
    hello(name: String): String!
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
};

const server = new GraphQLServer({
  // typeDefs: './schema.graphql',
  typeDefs,
  resolvers,
});

server.start(
  {
    cacheControl: true,
  },
  () => console.log(`Server is running on http://localhost:4000`)
);
