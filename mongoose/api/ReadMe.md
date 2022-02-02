# MongoDB

## Description

I created an Apollo GraphQL server and connected it with MongoDB.

## Used packages

- apollo-server-express 3.6.2
- apollo-server-core 3.6.2
- express 4.17.2
- graphql 16.3.0
- mongoose 6.1.8
- http
- nodemon 2.0.15

## Using mongoose to create the connection with the database

You can find the connenction file in src/db.js. I used a very basic connection implementation.
You can find all information necessary here https://mongoosejs.com/docs/connections.html.
Next i needed to create the schemas for the models that are located in the models folder. https://mongoosejs.com/docs/api/schema.html
