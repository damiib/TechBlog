const router = require('express').Router();
const {Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.post("/", withAuth, async (req, res) => {
    const body = req.body;
    try {
      const newPost = await Comment.create({
        ...body,
        userId: req.session.userId,
      });
      res.status(200).json(newPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;