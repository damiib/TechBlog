//create dashboard routes withAuth
const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

// home route "/" is supposed to find all the posts where the user id matched it is supposed to render in the dashboard handlebar, if ther is an error redirect the user to the login page
router.get("/", withAuth, async (req, res) => {
    console.log('logged in!')
});


// this route need to render the new post handlebar. its a route for new posts

//create an edit route that takes an id param and finds the post by primary key also renders in the dashboard




module.exports=router
