const express = require('express')
const router = express.Router()
const User = require('../models/user_model.js');
const Parks = require('../models/parks_model.js');



////////////////////////////////



// NEW
router.get('/new', (req, res) => {
    res.render('newpark.ejs', {
        currentUser: req.session.currentUser,
    });
});

// EDIT
router.get('/:id/edit', (req, res) => {
    Parks.findById(req.params.id, (err, newPark) => {
        res.render('editpark.ejs', {
            park: newPark,
            currentUser: req.session.currentUser
        });
    });
});

// SHOW
router.get('/:id', (req, res) => {
    Parks.findById(req.params.id, (err, newPark) => {
        res.render("showpark.ejs", {
            park: newPark,
            currentUser: req.session.currentUser
        });
    });
});




// INDEX
router.get("/", (req, res) => {
    if(req.session.currentUser) {
        Parks.find({userId: req.session.currentUser._id}, (err, foundParks) => {
            res.render("index.ejs", {
                currentUser: req.session.currentUser,  
                parks: foundParks 
            })
        })
    }else {
        res.render('index.ejs', {
        currentUser: req.session.currentUser
        });
    }
});
    


//////////////////////////////////

// CREATE
router.post('/', (req, res) => {
    req.body.userId = req.session.currentUser._id
    Parks.create(req.body, (err, data) => {
        res.redirect('/')
    });
});

// DESTROY
router.delete('/:id', (req, res) => {
    Parks.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect('/');
    });
});

// UPDATE
router.put('/:id', (req, res) => {
    Parks.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data) => {
        res.redirect('/');
    });
});





module.exports = router