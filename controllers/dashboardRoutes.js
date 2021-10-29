//create dashboard routes withAuth
const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
    console.log('logged in!')
});



module.exports=router
