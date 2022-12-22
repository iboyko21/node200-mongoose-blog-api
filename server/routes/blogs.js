const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');


router.route("/")
    .get((req, res) => {
        Blog
            .find()
            .then(users => {
                res.status(200).json(users)
                console.log(users)
            })
    })
    .post((req, res) => {
        Blog    
            .create(req.body)
            .then(users => {
                res.status(200).json(users)
            })
    })

router.route("/:id")
    .get((req, res) => {
        Blog
            .findById()
            .then(users => {
                res.status(200).json(users);
            })
    })
    .put((req, res) => {
        Blog
            .findByIdAndUpdate()
            .then(users => {
                res.status(200).json(users);
            })
    })
    .delete((req, res) => {
        Blog
            .findByIdAndRemove()
            .then(users => {
                res.status(200).json(users)
            })
    });

router.route("/featured")
    .get((req, res) => {
        Blog
            .find()
            // .where({ "featured": true })
            .then(users => {
                res.status(200).json(users);
                console.log(users);
            })
    })


module.exports = router;