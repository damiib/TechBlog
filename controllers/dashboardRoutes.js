//create dashboard routes withAuth
const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

// home route "/" is supposed to find all the posts where the user id matched it is supposed to render in the dashboard handlebar, if ther is an error redirect the user to the login page
router.get("/", withAuth, async (req, res) => {
  try {
    const allPost = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const mappedPosts = allPost.map((post) => post.get({ plain: true }));

    res.render("allPostAdmin", {
      layout: "dashboard",
      mappedPosts,
    });
  } catch (err) {
    res.redirect("login");
  }
});

// this route need to render the new post handlebar in the dashboard layout. its a route for new posts
router.get("/newpost", withAuth, async (req, res) => {
  res.render("new", {
    layout: "dashboard",
  });
});

//create an edit route that takes an id param and finds the post by primary key also renders in the dashboard

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const editData = await Post.findByPk(req.params.id);

    if(editData) { 
        const post = editData.get({plain:true});
        res.render('edit',{
        layout: 'dashboard',
        post
        })

    } else {
      res.status(400).end();
    }
  } catch (err) {
    res.redirect("login");
    
  }
});

module.exports = router;
