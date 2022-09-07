const router = require('express').Router();

//this is where we load in the route
// const apiRoutes = require('./api');
const auth = require('./web/auth.js');

//middleware
router.use(auth);


module.exports = router;