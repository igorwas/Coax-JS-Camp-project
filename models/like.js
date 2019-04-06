import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    postId: { type: String, required: true },
    userId: { type: String, required: true },
})