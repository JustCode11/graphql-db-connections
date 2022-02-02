const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const dotenv = require('dotenv');
dotenv.config();
const http = require('http');

const models = require('./models');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const { connectToMongoDB } = require('./db');
const { seedAuthorsDB, seedCommentsDB } = require('./seeds');

const port = process.env.PORT || 4000;
const DB_HOST = "mongodb://localhost:27017/mongodbconnection";

async function startApolloServer() {
    const app = express();
    const httpServer = http.createServer(app);

    // Connect to the database
    connectToMongoDB(DB_HOST);

    // seed data
    seedAuthorsDB();
    seedCommentsDB();

    // Apollo Server setup
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => {
            // Add the db models to the context
            return { models };
        },
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
    });

    await server.start();
    // Apply the Apollo GraphQL middleware and set the path to /api
    server.applyMiddleware({ app, path: '/api' });

    await new Promise(resolve => httpServer.listen({ port }, resolve));
    console.log(`GraphQL Server running at http://localhost:${port}${server.graphqlPath}`)
}
startApolloServer();