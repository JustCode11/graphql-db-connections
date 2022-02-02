const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const main = async () => {
    const peter = await prisma.Author.create({
        data: {
            id: 1,
            name: "Peter"
        }
    });
    const veronica = await prisma.Author.create({
        data: {
            id: 2,
            name: "Veronica"
        }
    });

    const comment1 = await prisma.Comment.create({
        data: {
            id: 1,
            content: "Peters comment",
            authorId: 1
        }
    });
    const comment2 = await prisma.Comment.create({
        data: {
            id: 2,
            content: "Veronicas first comment",
            authorId: 2
        }
    });
    const comment3 = await prisma.Comment.create({
        data: {
            id: 3,
            content: "Veronicas second comment",
            authorId: 2
        }
    });
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect()
    });