
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
})

BlogPost.hasMany(Comment, {
  foreignKey: "post_id",

});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
})

module.exports = { User, Post, Comment };


// const User = require('./User');
// const BlogPost = require('./BlogPost');
// const Comment = require('./Comment');




// User.hasMany(BlogPost, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// BlogPost.belongsTo(User, {
//     foreignKey: 'user_id',
// });

// Comment.belongsTo(User, {
//     foreignKey: 'user_id',
// });

// Comment.belongsTo(BlogPost, {
//     foreignKey: 'blogpost_id'
// });


// module.exports = { User, BlogPost, Comment };