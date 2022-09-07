
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      references:{
        model: 'user', 
        key: "id"
      }
    }
  }, 
  {
    sequelize,
        
        
          timestamps: true,
          underscored: false,
          modelName: 'post'
      
  }
);

module.exports = Post;


// const sequelize = require("../config/connection");
// const { Model, DataTypes } = require('sequelize');
// const User = require('./User');

// //create the model for BlogPost

// class BlogPost extends Model {}

// BlogPost.init (
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         title: {
//             type: DataTypes.STRING,
//             allowNull: true,
//         },
//         content: {
//             type: DataTypes.STRING,
//             allowNull: true
//         },
//         user_id: {
//             type: DataTypes.STRING,
//             references: {
//                 model: 'user',
//                 key : 'id'
//             }
//         }
//     },
//     {
//         sequelize,
//         timestamps: true,
//         underscored: true,
//         modelName: 'blogpost'
//     }
// );

// module.exports = BlogPost;