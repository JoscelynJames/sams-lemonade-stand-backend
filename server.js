const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./src/schema.js');

const PORT = process.env.PORT || 3000;
const app = express();
app.use('/', graphqlHTTP({
	schema: schema,
	graphiql: true //set to false if you don't want graphiql enabled
}));

app.listen(PORT);
console.log(`GraphQL API server running at localhost:${PORT}`);
