const express = require('express')
const router = express.Router()
const User = require('../models/user_model.js');



////////////////////////////////



// NEW
// router.get('/new', (req, res) => {
//     res.render('products/new.ejs');
// });

// // EDIT
// router.get('/:id/edit', (req, res) => {
//     Products.findById(req.params.id, (err, newProduct) => {
//         res.render('products/edit.ejs', {
//             product: newProduct
//         });
//     });
// });

// // SHOW
// router.get('/:id', (req, res) => {
//     Products.findById(req.params.id, (err, newProduct) => {
//         res.render("products/show.ejs", {
//             product: newProduct
//         });
//     });
// });



// INDEX
router.get("/", (req, res) => {
    res.render('index.ejs', {
        currentUser: req.session.currentUser
    });
});
    


//////////////////////////////////

// CREATE
// router.post('/', (req, res) => {
//     Products.create(req.body, (err, data) => {
//         res.redirect('/products/')
//     });
// });

// // DESTROY
// router.delete('/:id', (req, res) => {
//     Products.findByIdAndDelete(req.params.id, (err, data) => {
//         res.redirect('/products/');
//     });
// });

// // UPDATE
// router.put('/:id', (req, res) => {
//     Products.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data) => {
//         res.redirect('/products/');
//     });
// });

// // BUY
// router.put("/:id/buy", (req, res) => {
//     Products.findById(req.params.id, (err, boughtProduct) => {
//         boughtProduct.qty -= 1;
//         Products.findByIdAndUpdate(req.params.id, boughtProduct, (err, data) => {
//           res.redirect(`/products/${req.params.id}`);
//         });
//     });
// });



module.exports = router