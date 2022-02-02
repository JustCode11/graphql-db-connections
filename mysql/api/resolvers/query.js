module.exports = {
    comments: async (_, __, { models }) => {
        return await models.Comment.findAll();
    },
    comment: async (_, { id }, { models }) => {
        return await models.Comment.findByPk(id);
    },
    authors: async (_, __, { models }) => {
        return await models.Author.findAll();
    },
    author: async (_, { id }, { models }) => {
        return await models.Author.findByPk(id);
    }
};