const mongoose = require('mongoose');
const { Author, Comment } = require('./models');

const seedAuthors = [
    {
        _id: mongoose.Types.ObjectId('4edd40c86762e0fb12000003'),
        name: 'Peter'
    },
    {
        _id: mongoose.Types.ObjectId('4edd40c86762e0fb12000004'),
        name: 'Veronica'
    }
];

const seedComments = [
    {
        _id: mongoose.Types.ObjectId('4edd40c86762e0fb12000010'),
        content: "Peter\'s comment",
        author: mongoose.Types.ObjectId('4edd40c86762e0fb12000003')
    },
    {
        _id: mongoose.Types.ObjectId('4edd40c86762e0fb12000011'),
        content: "Veronicas comment",
        author: mongoose.Types.ObjectId('4edd40c86762e0fb12000004')
    },
    {
        _id: mongoose.Types.ObjectId('4edd40c86762e0fb12000012'),
        content: "Veronicas second comment",
        author: mongoose.Types.ObjectId('4edd40c86762e0fb12000004')
    }
];

const seedAuthorsDB = async () => {
    await Author.deleteMany({});
    await Author.insertMany(seedAuthors);
};

const seedCommentsDB = async () => {
    await Comment.deleteMany({});
    await Comment.insertMany(seedComments);
};

module.exports = { seedAuthorsDB, seedCommentsDB };