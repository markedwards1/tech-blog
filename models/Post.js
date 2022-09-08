
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
        model: "Users", 
        key: "id"
        
      }
    }
    // username_id: {
    //   type: DataTypes.STRING,
    //   references: {
    //     model: "Users",
    //     key: "username"
    //   }
    // }
  }, 
  {
    sequelize,
    timestamps: true,
    underscored: false,
    modelName: "post"
  }
);

module.exports = Post;
