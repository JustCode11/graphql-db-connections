module.exports = {
    comments: async (comment, _, { models }) => {
        return await models.Author.findUnique({ where: { id: comment.id } }).comments();
    }
}