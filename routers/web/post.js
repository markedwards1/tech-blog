const { Post }= require("../../models/");
const { User } = require("../../models/");
const { update } = require("../../models/User");
const withAuth = require('../../utils/auth')

const router = require("express").Router();


router.get('/', async (req, res) => {


    const posts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: [
            "id", "username"
          ]
        }
      ]
    });
    const results = posts.map((posts) => posts.get({ plain: true }))
    // console.log(results);
    res.render("home", {
      posts: results,
      // users: userResults,
      
    });
    
})


//CREATE POST

router.post('/dashboard', withAuth,  async (req, res) => {
  try {
      res.render('dashboard');
    
        const newPost = await Post.create({
      
      
      
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id
    });



  } catch (err) {
    res.status(400).json(err);
  } 
});




//GET ONE POST

router.get('/edit-post/:id', withAuth, async (req, res) => {
  const post = await Post.findOne({
    where: {
      id: req.params.id
    }, 
    attributes: [
      'id',
      'title',
      'content',
      'createdAt' 
     
    ],
    include: [{
      model: User,
      attributes: [
        "id", 
        "username"
      ]
    }]
    
  })
  const results = post.get({ plain: true })
  res.render("edit-post",{ post: results })

});

// Update post


// router.put('/update-post/:id',  (req, res) => {
//   try {
//     const updatePost =  Post.update({
//       title: req.params.title,
//       content: req.params.content
//     }
      

//     );
//     res.status(200).json(updatePost);
//     console.log(updatePost)
//   } catch (err){
//     res.status(400).json("wrong post id")
//   }
// })

router.put('/update-post/:id', withAuth, (req, res) => {
  //Calls the update method on the Book model
  res.render('dashboard');
  Post.update(
    {
      // All the fields you can update and the data attached to the request body.
      title: req.body.title,
      content: req.body.content
    },
    {
      // Gets a book based on the book_id given in the request parameters
      where: {
        id: req.params.id,
      },
    }
    )
    .then((updatedPost) => {
      // console.log(updatedPost)
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;








