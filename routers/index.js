const router = require('express').Router();

//this is where we load in the route
const auth = require('./web/auth')
const post = require('./web/post.js')

//middleware
// router.use(auth);
router.use(post)


module.exports = router;