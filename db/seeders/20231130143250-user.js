"use strict";
const bcrypt= require('bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Иван",
          email: "1@1",
          password: await bcrypt.hash("1", 10), 
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Валентин",
          email: "2@2",
          password: await bcrypt.hash("1", 10),
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Катя",
          email: "3@3",
          password: await bcrypt.hash("1", 10),
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
