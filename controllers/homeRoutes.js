const router = require('express').Router();
const {Post, Comment, User} = require('../models');


//create the homepage route and have it show all the posts

router.get("/", async (req, res) => {
    try{
        const allPosts = await Post.findAll({
            include:[User]
        })
        
        const mappedPosts = allPosts.map((post)=> post.get({plain: true}))

        res.render('allPost', { mappedPosts })

    }catch(err){
        res.status(500).json(err);
    }
});

//create a route that gets a single post using the ID. 

router.get('/post/:id', async (req, res)=>{
    //call the  Post model and find by primary (check the mondodb docs for the appropriate function) key using the id passed in through the params and be sure to include the user and comment models. Then make sure to render the result in the singlePost handlebar
    try {
        const postData = await Post.findByPk(req.params.id, {
          include: [
              User,
          {
              model: Comment,
              include:[User]
          },
              
          ]  
        });

        if(postData){

            const post = postData.get({plain:true});

            res.render('singlePost', { post });

        }else{
            res.status(404).end()
        }

    }catch (err) {
        res.status(500).json(err);
    }
   


})

//create your login route

router.get('/login', async (req, res)=>{
// create an if statement that if user is not logged in (research the auth file in the utils folder)  reditect the user to the "/"

if(req.session.logged_in){
    res.redirect('/');
    return;
}

//render login handlebar
res.render('login');
})

//create your signup route

router.get('/signup', async (req, res)=>{
// create an if statement that if user is not logged in (research the auth file in the utils folder)  reditect the user to the "/"
if (req.session.logged_in) {
    res.redirect('/');
}
//render signup handlebar
res.render('signup');
})

//make sure to export router

module.exports = router;