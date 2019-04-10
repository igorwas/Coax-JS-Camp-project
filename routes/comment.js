const router = require('express').Router();

const Comment = require("../models/comment");

router.get('/:postId/comments', (req, res) => {
	Comment.find({ postId: req.params.postId }).exec()
		.then(allComments => {
			const reversedComments = allComments.reverse();
			res.send({ status: "success", comments: reversedComments })
		})
		.catch(err => {
			console.log(err);
			res.send({ status: "error", err })
    })
})

router.post('/:postId/comment', (req, res) => {
	Comment.create( req.body )
		.then(result => {
			res.send({ status: "created", comment: result});			
		})
		.catch(err => {
			console.log(err);
			res.send({ status: "error", err })
		})
})

module.exports = router;