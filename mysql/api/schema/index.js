const { gql } = require('apollo-server-express');

module.exports = gql`
    scalar DateTime

    type Comment {
        id: ID!
        content: String!
        author: Author!
        createdAt: DateTime!
        updatedAt: DateTime!
    }

    type Author {
        id: ID!
        name: String!
        comments: [Comment!]!
    }

    type Query {
        comments: [Comment!]!
        comment(id: ID!): Comment!
        authors: [Author!]!
        author(id: ID!): Author!
    }

    type Mutation {
        newComment(content: String!, name: String!): Comment!
        updateComment(id: ID!, content: String!): Comment!
        deleteComment(id: ID!): Boolean!
    }
`;