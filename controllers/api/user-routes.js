const router =  require('express').Router();
const {User}=  require('../../models');

// route to add a user to the DB route should be "/"
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });


    } catch (err) {
        res.status(400).json(err);
        
    
});
//route to find one user and check their password and username
router.post('login', async (req, res) =>{
    try{
        const userData = await User.findOne({ where:{ password: req.body.password}});

        if (!validPassword){
            res
            .status(400)
            .json({message: 'Incorrect password, please try again!'});
            return;
        }

    } catch (err) {
        res.status (500).json(err);
    }
})
//route for logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        })
    } else {
        res.status(404).end();
    }
})

module.exports = router;