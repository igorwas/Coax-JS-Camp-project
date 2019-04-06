const router = require('express').Router();
const fs = require("fs");
const request = require("request");

const Post = require("../models/post");

router.get('/', (req, res) => {
	Post.find().exec()
		.then(allPosts => {
			res.send({ status: "success", posts: allPosts })
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

router.get('/byuser/:userId', (req, res) => {
	Post.find({ userId: req.params.userId }).exec()
		.then(allPosts => {
			res.send({ status: "success", posts: allPosts })
		})
		.catch(err => {
			console.log(err);
	
			res.send({ status: "error", err })
		})
})

router.post('/', (req, res) => {

	//req.body.Image as base64
	//Validation
	console.log(req.body)
	Post.create({ ...req.body })
		.then(result => {
			console.log(result.imageUrl, result.description)
			res.send({ status: "created", _id: result._id, description: result.description });			
		});

	// fs.readFile(`${process.cwd()}/images/354.jpg`, (err, data) => {
	// 	if (err) return resolve(null);

	// 	const base64Image = new Buffer(data, 'binary').toString('base64');

	// 	//Upload to imgur
	// 	const postToImgur = request.post('https://api.imgur.com/3/image', {
	// 		headers: {
	// 			'Authorization': "Bearer b5020116034d3925e2cb8c093dc86e6a979564e5",
				
	// 			// Taras  8007ca856c67c01c49fd42315d96d694681be621
	// 			//mine #access_token=b5020116034d3925e2cb8c093dc86e6a979564e5 bearer 
	// 			//refresh_token=3dec2b61117650d8f92411518ec169a1fe3b6433
	// 		}
	// 	}, (error, response, body) => {
	// 		//send error
	// 		if (error) {
	// 			res.send({ status: "error", error });
	// 		}
	// 		//send response
			
	// 		result = JSON.parse(body);
	// 		Post.create({ ...req.body, imageUrl: result.data.link })
	// 			.then(result => {
	// 				console.log(result.imageUrl, result.description)
	// 				res.send({ status: "created", _id: result._id, description: result.description });			
	// 			});
	// 		console.log(body)
	// 	});

	// 	const upload = postToImgur.form();
	// 	upload.append('type', 'file');
	// 	upload.append('image', base64Image);
	// });
})

router.delete('/:id', (req, res) => {
	console.log("indelete")
	Post.findOneAndDelete({ _id: req.params.id }).exec()
		.then( deletedPost =>{
			console.log(deletedPost)
			res.send({ status: "success", deletedPost })
		})
		.catch(err => {
			console.log(err);
	
			res.send({ status: "error", err })
		})
})

module.exports = router;