const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const http = require('http');

const { PrismaClient } = require('@prisma/client');
const models = new PrismaClient();

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const port = process.env.PORT || 4000;

async function startApolloServer() {
    const app = express();
    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: { models },
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
    });

    await server.start();

    server.applyMiddleware({ app, path: '/api' });

    await new Promise(resolve => httpServer.listen({ port }, resolve));
    console.log(`GraphQL Server running at http://localhost:${port}${server.graphqlPath}`);
}
startApolloServer();