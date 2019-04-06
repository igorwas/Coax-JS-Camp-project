const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: String,
	firstName: String,
	lastName: String,
	password: { type: String, required: true },
	createdAt: { type: String, default: Date.now }
})

module.exports = mongoose.model("User", UserSchema);