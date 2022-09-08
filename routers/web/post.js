const Post = require("../../models/Post");
const User = require("../../models/User");

const router = require("express").Router();


router.get('/', async (req, res) => {

  const users = await User.findAll();
  const userResults = users.map((userResults) => userResults.get({ plain: true }))
  console.log(users);
    

    const posts = await Post.findAll();
    const results = posts.map((posts) => posts.get({ plain: true }))
    
    res.render("home", {
      posts: results,
      users: userResults,
      
    });
    
})

module.exports = router;








