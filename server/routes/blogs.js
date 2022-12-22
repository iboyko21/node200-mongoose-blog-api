const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
// const User = require('../models/User');

router.route("/")
    .get((req, res) => {
        Blog
            .find()
            .then(blogs => {
                res.status(200).json(blogs)
                console.log(blogs)
            })
    })
    .post((req, res) => {
        Blog    
            .create(req.body)
            .then(blogs => {
                res.status(200).json(blogs)
            })
    })

router.route("/:id")
    .get((req, res) => {
        Blog
            .findById(_id)
            .then(blogs => {
                res.status(200).json(blogs);
            })
    })
    .put((req, res) => {
        Blog
            .findByIdAndUpdate(_id)
            .then(blogs => {
                res.status(200).json(blogs);
            })
    })
    .delete((req, res) => {
        Blog
            .findByIdAndRemove(_id)
            .then(blogs => {
                res.status(200).json(blogs)
            })
    });

router.route("/featured")
    .get((req, res) => {
        Blog
            .where({ "featured": true })
            .then(blogs => {
                res.status(200).json(blogs);
                console.log(blogs);
            })
    })

// // Fetch the user from the databse
// User.findById(req.body.authorId)

// // Fetch the user from the database
// User.findById(req.body.authorId)
//     .then(user => {
//         // Create a blog
//         const newBlog = new Blog(req.body);

//         // Bind the user on it
//         newBlog.author = user._id;

//         // Save it to the database
//         return newBlog.save();
//     })

// // New higher scope variable
// let dbUser = null;

// // Fetch the user from the database
// User
//     .findById(req.body.authorId)
//     .then(user => {
//         // Store the fetched user in higher scope variable
//         dbUser = user;

//         // Create a blog
//         const newBlog = new Blog(req.body);

//         // Bind the user to it
//         newBlog.author = user._id;

//         // Save it to the database
//         return newBlog.save();
//     })
//     .then(blog => {
//         // Push the saved blog to the array of blogs associated with the User
//         dbUser.blogs.push(blog);

//         // Save the user back to the database and respond to the original HTTP request 
//         // with a copy of the newly created blog
//         dbUser.save().then(() => res.status(201).json(blog));
//     })

module.exports = router;