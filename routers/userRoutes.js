const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

const router = require('express').Router();




router.get('/dashboard', withAuth, (req, res) => {
    res.render("dashboard");
})

// router.get('/post/:id', withAuth, (req, res)=>{
//    const onePost = Post.findByPk(req.params.id, {
//         include: [
//             User,
//             {
//                 model: Comment,
//                 include: [User]
//             }
//         ]
//     })
//     res.render.json(onePost)
// })


module.exports = router;