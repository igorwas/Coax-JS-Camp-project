const router = require('express').Router();

const User = require("../models/user");

router.get('/', (req, res) => {
    User.find({}, "email createdAt").exec().then(allusers => {
        res.send({ status: "success", users: allusers })
    })
})

router.get('/:id', (req, res) => {
    User.findOne({ _id: req.params.id }, "email createdAt").exec().then(user => {
        res.send({ status: "success", user })
    })
})

//registration
router.post("/", (req, res) => {
    const { email, password } = req.body

    //validation

    User.create({ email, password }).then(result => {
        console.log(result)

        res.send({ status: "created", id: result._id })
    }).catch(err => {
        console.log(err);

        res.send({ status: "error", err })
    })
})

router.post("/authentificate", (req, res) => {
    const { email, password } = req.body

    //validation

    User.findOne({ email, password })
        .then(result => {
            if (result) {
                //generate token, expire in
                res.send({ status: "success", id: result._id })
            }else res.send({ status: "error", message: "user not found" });
            
            console.log(result)

            res.send({ status: "created", id: result._id  })
        }).catch(err => {
            console.log(err);
            res.send({ status: "error", err })
        })
})

module.exports = router;