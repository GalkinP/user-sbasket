"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Чай",
          description: "черный",
          price: 100,
          img: "https://avatars.mds.yandex.net/i?id=2d976f44b1b26a5eb8adf11cd452431533837206-10848716-images-thumbs&n=13",
          userId: 1,
          basketId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "порошок",
          description: "зубной",
          price: 120,
          img: "https://avatars.mds.yandex.net/i?id=e60157199a6f6249885a27f68e0de9ff5a2e18d7-11377357-images-thumbs&n=13",
          userId: 1,
          basketId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "огурец",
          description: "зел",
          price: 10,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6S2XdKI4qmuLWZxbI3pWjPYty7Tcul4bTmw&usqp=CAU",
          userId: 2,
          basketId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "njvfn",
          description: "зел",
          price: 10,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5MT3P69OyocAl5PV-XWLF91YG7T_DpF47g&usqp=CAU",
          userId: 3,
          basketId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "пкпкпк",
          description: "lorem dbdfbdbdbdfbdfbdbdfd",
          price: 10,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8NeqwWuWgs8aakwrVG_ogLeB9ExhqkWs3BBUzv30I5BK04KfBf1SDTW7vzn1m-ZD1uzk&usqp=CAU",
          userId: 2,
          basketId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "bgfgbпкпк",
          description: "lorembdfbdbdbdfbdfbdbdfd",
          price: 10,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_7rf57fVPHVyLGyN1WBxNNiAcxkKkNQHfHw&usqp=CAU",
          userId: 3,
          basketId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
