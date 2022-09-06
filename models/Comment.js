const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");


class Comment extends Model {}



Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comment_content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        blogpost_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'blogpost',
                key: 'id'
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