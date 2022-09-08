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
        model: "Users", 
        key: "id"
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      references:{
        model: "Users", 
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
