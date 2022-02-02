module.exports = {
    comments: async (_, __, { models }) => {
        return await models.Comment.findMany();
    },
    comment: async (_, { id }, { models }) => {
        return await models.Comment.findUnique({
            where: {
                id
            }
        });
    },
    authors: async (_, __, { models }) => {
        return await models.Author.findMany();
    },
    author: async (_, { id }, { models }) => {
        return await models.Author.findUnique({
            where: {
                id
            }
        });
    }
}