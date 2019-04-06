const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const posts = require('./routes/post');
const users = require('./routes/user');

const app = express();

// Set up middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up routes
app.use('/api/posts', posts);
app.use('/api/users', users);


app.listen(3030, () => {
	console.log('Server is listening');
});

mongoose.connect('mongodb://localhost:27017/coax-insta', { useNewUrlParser: true }, (err) => {
	if(err) return console.log(err, "error");

	console.log("Connected successful");

});