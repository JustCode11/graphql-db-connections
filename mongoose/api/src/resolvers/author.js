module.exports = {
    // resolve the list of comments for a author when requested
    comments: async (author, _, { models }) => {
        return await models.Comment.find({ author: author._id }).sort({ _id: -1 });
    }
};