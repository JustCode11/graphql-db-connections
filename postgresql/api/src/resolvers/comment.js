module.exports = {
    author: async (author, _, { models }) => {
        return await models.Comment.findUnique({ where: { id: author.id } }).author();
    }
};