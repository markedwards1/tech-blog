const router = require('express').Router();

//this is where we load in the route
const auth = require('./web/auth.js')
const post = require('./web/post.js')
const userRoutes = require('./userRoutes');

//middleware
router.use(auth);
router.use(post)
router.use(userRoutes);


module.exports = router;