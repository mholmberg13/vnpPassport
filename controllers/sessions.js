const express = require('express');
const router = express.Router();
const User = require('../models/user_model.js');
const bcrypt = require('bcrypt');

//////////////////////


router.get('/new', (req, res) => {
    res.render('sessions/new.ejs');
});


//////////////////////

router.post('/', (req, res)=>{
    User.findOne({ username: req.body.username },(err, foundUser) => {
        if( bcrypt.compareSync(req.body.password, foundUser.password) ){
            req.session.currentUser = foundUser;
            res.redirect('/index');
        } else {
            res.send('wrong password');
        }
    });
});

router.delete('/', (req, res) => {
    req.session.destroy(()=>{
        res.redirect('/index');
    });
})



module.exports = router;