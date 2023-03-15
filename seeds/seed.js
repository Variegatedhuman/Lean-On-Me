const sequelize = require('../config/connection');
const { User, Opportunity } = require('../models');
const userData = require('./userData.json');
const projectData = require('./projectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // for (const project of projectData.volunteer_opportunities) {
  //   const randomUser = users.length ? users[Math.floor(Math.random() * users.length)] : null;
  //   if (randomUser) {
  //     await Opportunity.create({
  //       ...project,
  //       user_id: randomUser.id,
  //     });
  //   }
  // }
  const opporunties = await Opportunity.bulkCreate(projectData, {
  });


  process.exit(0);
};

seedDatabase();