module.exports = {
    comments: async (_, __, { models }) => {
        return await models.Comment.find();
    },
    comment: async (_, { id }, { models }) => {
        return await models.Comment.findById(id);
    },
    authors: async (_, __, { models }) => {
        return await models.Author.find();
    },
    author: async (_, { id }, { models }) => {
        return await models.Author.findById(id);
    }
};