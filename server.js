const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);
const root = {
    hello: () => 'Hello world!',
  };
  const express = require('express');
  const { graphqlHTTP } = require('express-graphql');
  
  const app = express();
  
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));
  
  app.listen(3000, () => console.log('Running a GraphQL API server at port 3000'));
    