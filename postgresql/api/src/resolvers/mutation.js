const { ForbiddenError } = require('apollo-server-express');

module.exports = {
    newComment: async (_, { content, name }, { models }) => {
        const author = await models.Author.findUnique({
            where: { name }
        });
        if (!author) {
            throw new ForbiddenError('This author don\'t exists');
        }

        // get highest id
        let id = 1;
        const highestId = await models.Comment.findMany({ orderBy: { id: 'desc' } });
        if (highestId.length > 0) {
            id = highestId[0].id + 1;
        }

        return await models.Comment.create({
            data: {
                id,
                content,
                authorId: author.id
            }
        });
    },
    updateComment: async (_, { id, content }, { models }) => {
        const comment = await models.Comment.findUnique({ where: { id: parseInt(id) } });

        if (!comment) {
            throw new ForbiddenError('This comment don\'t exists');
        }

        return await models.Comment.update({
            where: {
                id: parseInt(id)
            },
            data: {
                content
            }
        });
    },
    deleteComment: async (_, { id }, { models }) => {
        const comment = await models.Comment.findUnique({ where: { id: parseInt(id) } });
        if (!comment) {
            throw new ForbiddenError('This comment don\'t exist');
        }

        try {
            await models.Comment.delete({ where: { id: parseInt(id) } });
            return true;
        } catch (err) {
            return false;
        }
    }
}