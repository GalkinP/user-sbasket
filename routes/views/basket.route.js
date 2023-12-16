const router = require("express").Router();
const BasketPage = require("../../components/page/BasketPage");
const { Basket, Product } = require("../../db/models");




router.get("/:basketId", async (req, res) => {
  try {
    const { basketId } = req.params;
    console.log(basketId,"uuuuuuuuuu");
    const basket = await Basket.findOne({
      where: { id: Number(basketId) },
      include: Product,
    });

    const html = res.renderComponent(BasketPage, {
      title: "basketPage",
      basket,
      user: res.locals.user,
    });
    res.send(html);
  } catch (message) {
    console.log(message);
  }
});

module.exports = router;
