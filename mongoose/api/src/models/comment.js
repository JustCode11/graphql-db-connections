const mongoose = require('mongoose');

// Define the comment's database schema
const commentSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Author',
            required: true
        }
    },
    {
        // Assigns createdAt and updatedAt fields with a Date type
        timestamps: true
    }
);

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;