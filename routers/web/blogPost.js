const BlogPost = require("../../models/BlogPost");

const router = require("express").Router();

//THIS PAGE IS THE ROOT.
//This code is the javascript that handles the GET, POST, DELETE. It is where ALL data between user and server gets transferred.

//GET homepage
//async because it happens after the request

// This code is getting data
// The home page wants all blog table DB info
router.get("/", async (req, res) => {
  //We use { plain : true } - to give the plain data, otherwise you will get createdAt and updatedAt

  //Where javascript sends the get request to bring in the blog posts

  const blogPosts = await BlogPost.findAll();

  const results = blogPosts.map((blogPosts) => blogPosts.get({ plain: true }));

  //this is where we get all the data and put it in the handlebars
  res.render("home", {
    //the varible and the key are the same so this could just be blogs
    blogs: results,
  });
  console.log(results);
});

// router.get("/dashboard", (req, res) => {
//   res.render("dashboard");
// });

// //Post a blog to db

// // Use Sequelize's `create()` method to add a row to the table
// // Similar to `INSERT INTO` in plain SQL
// router.post("/dashboard", async (req, res) => {
//   const newBlog = BlogPost.create(req.body)
//     .then((newBlog) => {
//       res.redirect("/");
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });



module.exports = router;

//show a list of blogs

//GET specific blog

//POST comment

//GET specific Comment???
