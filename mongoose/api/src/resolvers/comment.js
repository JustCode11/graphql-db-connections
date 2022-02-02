module.exports = {
    // resolve the author info for a comment when requested
    author: async (comment, args, { models }) => {
        return await models.Author.findById(comment.author);
    }
};