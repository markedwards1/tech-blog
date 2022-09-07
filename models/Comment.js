const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references:{
        model: 'user', 
        key: "id"
      }
    },
    post_id: {
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
        underscored: true,
        modelName: "comment",
  }
);

module.exports = Comment;


// const sequelize = require("../config/connection");
// const { Model, DataTypes } = require("sequelize");


// class Comment extends Model {}



// Comment.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         comment_content: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         user_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             references: {
//                 model: 'user',
//                 key: 'id'
//             }
//         },
//         blogpost_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             references: {
//                 model: 'blogpost',
//                 key: 'id'
//             }
//         }
//     },
//     {
//         sequelize,
//         timestamps: true,
//         underscored: true,
//         modelName: "comment",
//     }
// );

// module.exports = Comment;