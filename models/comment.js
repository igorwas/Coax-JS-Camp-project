import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CommentSchema = new Schema ({
    postId: { type: String, required: true },
    userId: { type: String, required: true },
    comment: { type: String, required: true },
    createdAt: { type: String, default: Date.now }
})

module.exports = mongoose.model("Comment", CommentSchema)