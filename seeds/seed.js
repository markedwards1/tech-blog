
const sequelize = require('../config/connection');
// const { User } = require('../models');
const User = require('../models/User')
const userData = require('./userData.json');


//WHEN I TAKE OUT LINE 10 & 11 I CAN CREATE USER SEED

const BlogPost = require('../models/BlogPost');
const blogPostData = require('./blogPostdata.json');





const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

      process.exit(0);
  
};

//WHEN I DONT HAVE THE BELOW CODE I CAN RUN USER SEED
const seedBlogPost = async () => {
    await sequelize.sync({ force : true });
    await BlogPost.bulkCreate(blogPostData)
}


seedDatabase();


