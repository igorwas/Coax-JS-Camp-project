const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    postId: { type: String, required: true },
    userId: { type: String, required: true },
})

module.exports = mongoose.model("Like", LikeSchema)