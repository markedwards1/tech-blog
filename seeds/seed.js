const sequelize = require('../config/connection');
const User = require('../models/User')
const userData = require('./userData.json');
const Post = require('../models/Post');
const postData = require('./postData.json');
const comment = require('../models/Comment');
const commentData = require('./commentData.json')


const seedDatabase = async () => {
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  }); 
 
};

const seedPost = async () => {
  await Post.bulkCreate(postData)
};

const seedComment = async () => {
  await comment.bulkCreate(commentData)

};

async function seed() {
  await sequelize.sync({ force: true }); // this will drop my records
  await seedDatabase();
  await  seedPost();
  await seedComment();
}

seed();


