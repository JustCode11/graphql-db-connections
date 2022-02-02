const { ForbiddenError } = require('apollo-server-express');

module.exports = {
    newComment: async (_, { content, name }, { models }) => {
        const author = await models.Author.findOne({
            where: { name }
        });
        if (!author) {
            throw new ForbiddenError('This author don\'t exists');
        }

        await models.Comment.create({
            content,
            authorId: author.id
        });
        let comment = await models.Comment.findOne({
            where: { content, authorId: author.id },
            order: [['createdAt', 'DESC']]
        });

        return comment;
    },
    updateComment: async (_, { id, content }, { models }) => {
        const comment = await models.Comment.findByPk(id);

        if (!comment) {
            throw new ForbiddenError('This comment don\'t exist');
        }

        await comment.update({ content });

        return comment;
    },
    deleteComment: async (_, { id }, { models }) => {
        const comment = await models.Comment.findByPk(id);

        if (!comment) {
            throw new ForbiddenError('This comment don\'t exist');
        }

        try {
            await comment.destroy();
            return true;
        } catch (err) {
            return false;
        }
    }
}