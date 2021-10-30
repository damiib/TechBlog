const router =  require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes)
//create route for our posts
router.use('/post', postRoutes);
//create route for our comments
router.use('/comments', commentRoutes);

module.exports =  router;