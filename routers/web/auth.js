const User = require('../../models/User');
const withAuth = require('../../utils/auth')
const router = require('express').Router();


// contain authentication routes


// // login page
  router.get('/login', (req, res) => {
      res.render("login")

      
    });
  
  
//log user in
  //this is where the user starts. The user sends GET request to server through the route and the server SENDS back the login page. 
  // post login (for user to login)
  // this is the endpoint that you want to call to log the user in
  // this is the action endpoint that you want to log the user in
  // this is a async function



  router.post('/signup', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.status(200).json(userData)
        res.render('sucess')    
      });
    } catch (err) {
      res.status(400).json(err);
    } 
  });






  router.post('/login', async (req, res) => {
// Checks email and password
    try {                       // User.findOne => get only one user model
      const userData = await User.findOne({ where: { username: req.body.username } });
      if (!userData) {
        // This is the technique for passing errors - see handlebars {{error}} and if statments
        res.status(400).render('login', {
              //error: is passing in a new variable. You want to keep this up with your app to use with handlebars!!!
              error: "incorrect password or username"
            })
            
            return;
          }
      
          const validPassword = await userData.checkPassword(req.body.password);
      
          if (!validPassword) {
            res
            res.status(400).render('login', {
              error: "incorrect password or username"
            })
            return;
          }
      //req.session.save is setting the session. We can access req.session everywhere as long as the user is logged in
          req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            //when the user sucessfully logs in we are going to redirect them to the homepage
            res.redirect('/');
          });
      
        } catch (err) {
          //same logic as above - json only good with api
          res.status(400).render('login', {
              error: "incorrect password or username"
            });
        }

      
  });




router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end()
    });
  } else {
    res.status(404).end()
  }
})
  //signup page


  //post (for user to actually sign up)

  module.exports = router;