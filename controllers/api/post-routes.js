//require all neded modules and models and auth
const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

//add a route that creates a new post with auth
router.post("/", withAuth, async (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    const newPost = await Post.create({
      ...body,
      userId: req.session.userId,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//create a route that updates an existing post with auth
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatePost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updatePost > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//create a route that deletes a post with auth
router.delete("/:id", withAuth, async (req, res) => {
    try {
      const deleteData = await Post.destroy({
        where: {
          id: req.params.id
        },
      });
      if (!deleteData) {
        res
          .status(404)
          .json({ message: "There is no post found with this ID" });
        return;
      }
      res.status(200).json(deleteData);
    } catch (err) {
      res.status(500).json(err);
    }
});



//make sure to export routes
module.exports = router;
