const router = require('express').Router();

const Like = require("../models/like");

router.get('/:postId/likes', (req, res) => {
	Like.find({ postId: req.params.postId }).exec()
		.then(allLikes => {
			res.send({ status: "success", amountOfLikes: allLikes.length });
		})
		.catch(err => {
			console.log(err);
			res.send({ status: "error", err })
    	})
})
// /is-liked?userId=
router.get('/:postId/is-liked', (req, res) => {
	Like.findOne({ postId: req.params.postId , userId: req.query.userId }).exec()
		.then(like => {
			if(like){
				res.send({ status: "success", isLiked: true });
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