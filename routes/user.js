const router = require('express').Router();

const User = require("../models/user");

router.get('/', (req, res) => {
	User.find({}, "email firstName").exec().then(allusers => {
		res.send({ status: "success", users: allusers })
	})
	.catch(err => {
		console.log(err);
		res.send({ status: "error", err })
	})
})

router.get('/:id', (req, res) => {
	User.findOne({ _id: req.params.id}, "email firstName lastName createdAt").exec().then(user => {
		res.send({ status: "success", user })
	})
	.catch(err => {
		console.log(err);
		res.send({ status: "error", err })
	})
})

//registration
router.post("/", (req, res) => {
	const { email, password, firstName, lastName } = req.body;
	
	if(validateEmail(email)){
		res.send({ status: "user-error", message: "Email isn't valid" })
	} else {
		User.find({email : email}).exec(function(err, findedUser) {
			if (findedUser.length){
				res.send({ status: "user-error", message: "User with that email already exist" })
			} else {
				User.create({ email, password, firstName, lastName }).then(result => {
					res.send({ status: "created", id: result._id })
				}).catch(err => {
					console.log(err);
					res.send({ status: "error", err })
				})
			}
		})
	}
})

router.post("/authentificate", (req, res) => {
	const { email, password } = req.body

	if(validateEmail(email)){
		res.send({ status: "user-error", message: "Email isn't valid" })
	} else {
		User.findOne({ email })
			.then(result => {
				if(result == undefined){
					res.send({ status: "user-error", message: "User not found" });
				}else if (result.password == password) {
					res.send({ status: "success", id: result._id })
				}else res.send({ status: "user-error", message: "Password incorrect." });//

				res.send({ status: "created", id: result._id  })
			}).catch(err => {
				console.log(err);
				res.send({ status: "error", err })
			})
	}
})

const validateEmail = (email) => {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email) ? false : true;
}

module.exports = router;