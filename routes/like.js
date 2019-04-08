const router = require('express').Router();

const Like = require("../models/like");

router.get('/:postId/likes', (req, res) => {
	Like.find({ postId: req.params.postId }).exec()
		.then(allLikes => {
			console.log(allLikes.length)
			res.send({ status: "success", amountOfLikes: allLikes.length });
		})
		.catch(err => {
			console.log(err);
			res.send({ status: "error", err })
    	})
})

router.get('/:postId/isliked', (req, res) => {
	Like.findOne({ postId: req.params.postId , userId: req.body.userId }).exec()
		.then(like => {
			if(like){
				res.send({ status: "success", isliked: true });
			} else {
				res.send({ status: "success", isLiked: false });
			}			
		})
		.catch(err => {
			console.log(err);
			res.send({ status: "error", err })
    	})
})

router.post('/:postId/likes', (req, res) => {
	Like.create({ postId: req.params.postId , userId: req.body.userId })
		.then(like => {
			console.log(like)
			res.send({ status: "created", isLiked: true});			
		})
		.catch(err => {
			console.log(err);
			res.send({ status: "error", err })
		})
})

router.delete('/:postId/likes', (req, res) => {
	Like.findOneAndDelete({ postId: req.params.postId , userId: req.body.userId }).exec()
		.then(like => {
			res.send({ status: "success", isLiked: false});			
		})
		.catch(err => {
			console.log(err);
			res.send({ status: "error", err })
		})
})

module.exports = router;