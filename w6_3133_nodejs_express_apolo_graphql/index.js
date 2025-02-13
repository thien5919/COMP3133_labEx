const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');


//import ApolloServer
const { ApolloServer} = require('apollo-server-express')

const schema = require('./schema');
const resolvers = require('./resolvers');

//Store sensitive information to env variables
const dotenv = require('dotenv');
dotenv.config();




//Define Apollo Server
const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers,
  });

//Define Express Server
const app = express();
app.use(express.json());
app.use('*', cors());

//Add Express app as middleware to Apollo Server

server.applyMiddleware({ app});

//Start listen 
app.listen({ port: process.env.PORT || 3000 }, () => {  
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
  connectDB();
});