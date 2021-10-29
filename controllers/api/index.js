const router =  require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes)
//create route for our posts
//create route for our comments

module.exports =  router;