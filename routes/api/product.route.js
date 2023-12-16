const router = require("express").Router();
const { Product } = require("../../db/models");
const ProductEl = require('../../components/ProductEl')



// ДОБАВЛЕНИЕ ПРОДУКТА

router.post("/:basketId", async (req, res) => {
  console.log(req.params, "<++++++++++++");
  console.log(res.locals, 67676767676);
  try {
    const { name, description, price, img, basketId } = req.body;
    console.log(req.body, 22222222);
    console.log(res.locals.user.id, "++++++++++++");


    const product = await Product.create({
      name,
      description,
      price,
      img,
      userId: res.locals.user.id,
      basketId ,
    });

    const html = res.renderComponent(ProductEl, { product }, { doctype: false });

    res.json({
      message: "success",
      html: html,
    });
  } catch (message) {
    console.log(message,999999999)
  }
});



//  УДАЛЕНИЕ ПРОДУКТА

router.delete('/:productId', async(req, res) =>{
  
  
 
     const {productId} = req.params
  console.log(productId, '+++++++++++');
  const delitedProd = await Product.destroy({where:{id:productId, userId:res.locals.user.id}})

  if (delitedProd>0) {
    res.json({message:'success'})
  }

})





module.exports = router;
