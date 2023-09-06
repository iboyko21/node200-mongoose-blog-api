const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.route("/")
    .get((req, res) => {
        User
            .find()
            .then(users => {
                res.status(200).json(users)
                console.log(users)
            })
    })
    .post((req, res) => {
        User    
            .create(req.body)
            .then(users => {
                res.status(200).json(users)
                console.log(users)
            })
    });

router.route("/:id")
    .get((req, res) => {
        User
            .findById()
            .then(users => {
                res.status(200).json(users);
            });
    })
    .put((req, res) => {
        User
            .findByIdAndUpdate()
            .then(users => {
                res.status(200).json(users);
            });
    })
    .delete((req, res) => {
        User
            .findByIdAndRemove()
            .then(users => {
                res.status(200).json(users)
            })
    });

module.exports = router;