const { Post }= require("../../models/");
const { User } = require("../../models/");


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
    console.log(results);
    res.render("home", {
      posts: results,
      // users: userResults,
      
    });
    
})


//CREATE POST

router.post('/dashboard', async (req, res) => {
  try {
    const newPost = await Post.create({
    
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id
    });
    res.status(200).json(newPost);
    // res.render('/home');
  
  } catch (err) {
    res.status(400).json(err);
  } 
});


//GET ONE POST
router.get('/edit-post/:id', (req, res) => {
  Post.findOne({
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
        "id", "username"
      ]
    }]
  })
})

module.exports = router;








