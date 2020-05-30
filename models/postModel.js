const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Post must have a title'],
        unique: true,
        trim: true,
        maxlength: [40, 'Post title must be less than or equal to 40 characters'],
        minlength: [2, 'Post title must have at least 2 characters']
    },
    content: {
        type: String,
        required: [true, 'Post must have content'],
        trim: true,
        maxlength: [280, 'Post content must be less than or equal to 280 characters'],
        minlength: [2, 'Post content must have at least 2 characters']
    },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;