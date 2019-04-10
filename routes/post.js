const router = require('express').Router();

const Post = require("../models/post");
// ?offset=
router.get('/', (req, res) => {
	Post.find({}, "imageUrl description").exec()
		.then(allPosts => {
			const offset = req.query.offset ? req.query.offset : 0 ;
			const until = +offset + 12;
			const reversedPosts = allPosts.reverse().slice(offset, until)
			res.send({ status: "success", posts: reversedPosts })
		})
		.catch(err => {
			console.log(err);
			res.send({ status: "error", err })
		})
})

router.get('/:id', (req, res) => {
	Post.findOne({ _id: req.params.id }).exec()
		.then(post => {
			res.send({ status: "success", post })
		})
		.catch(err => {
			console.log(err);
			res.send({ status: "error", err })
		})
})
// ?offset=
router.get('/byuser/:userId', (req, res) => {
	Post.find({ userId: req.params.userId }, "imageUrl description").exec()
		.then(allPosts => {
			const offset = req.query.offset ? req.query.offset : 0 ;
			const until = +offset + 12;
			const reversedPosts = allPosts.reverse().slice(offset, until)
			res.send({ status: "success", posts: reversedPosts })
		})
		.catch(err => {
			console.log(err);
			res.send({ status: "error", err })
		})
})

router.post('/', (req, res) => {
	Post.create({ ...req.body})
		.then(result => {
			res.send({ status: "created", post: { _id: result._id, imageUrl: result.imageUrl, description: result.description }});			
		})
		.catch(err => {
			console.log(err);
			res.send({ status: "error", err })
		})
})

router.delete('/:id', (req, res) => {
	Post.findOneAndDelete({ _id: req.params.id }).exec()
		.then( deletedPost =>{
			res.send({ status: "success", deletedPost })
		})
		.catch(err => {
			console.log(err);
	
			res.send({ status: "error", err })
		})
})

module.exports = router;