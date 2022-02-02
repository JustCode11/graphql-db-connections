const { ForbiddenError } = require('apollo-server-express');

module.exports = {
    newComment: async (_, { content, name }, { models }) => {
        const author = await models.Author.findOne({ name });
        if (!author) {
            throw new ForbiddenError('This author don\'t exist');
        }

        return await models.Comment.create({
            content,
            author: author._id
        });
    },
    updateComment: async (_, { id, content }, { models }) => {
        const comment = await models.Comment.findById(id);

        if (!comment) {
            throw new ForbiddenError('This comment don\'t exist');
        }

        return await models.Comment.findOneAndUpdate(
            {
                _id: id
            },
            {
                $set: {
                    content
                }
            },
            {
                new: true
            }
        );
    },
    deleteComment: async (_, { id }, { models }) => {
        const comment = await models.Comment.findById(id);

        if (!comment) {
            throw new ForbiddenError('This comment don\'t exist');
        }

        try {
            await comment.remove();
            return true;
        } catch (err) {
            return false;
        }
    }
}