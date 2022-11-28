const { Comment, Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

const router = require('express').Router();


router.get('/add-comment/:id', withAuth, async (req, res) => {
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
          ],
        }],
        include: [{
          model: Comment,
          attributes: [
            "body",
            "user_id"
          ]
        }]
        
      });
      const results = post.get({ plain: true });
      res.render("add-comment",{ post: results });
      console.log(results);
      
    
})


router.post('/add-comment/:id', async (req, res) => {
    try {
        res.render('dashboard');
        const commentData = await Comment.create({

            post_id: req.params.id,
            user_id: req.session.user_id,
            body: req.body.body,


        });

    } catch (err) {
        res.status(400).json(err)
    
    }
})

module.exports = router;