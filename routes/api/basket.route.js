const router = require("express").Router();
const {Basket} = require("../../db/models");
const BasketEl = require("../../components/BasketEl");


// ДОБАВЛЕНИЕ КАРЗИНЫ


router.post("/", async (req, res) => {

try {const { name } = req.body;
  const basket = await Basket.create({ name, userId: res.locals.user.id });

  const html = res.renderComponent(BasketEl, { basket }, { doctype: false });

  res.json({
    message: "success",
    html: html,
  });
  
} catch ({message}) {
  res.json({error:message})
}

});



//  УДАЛЕНИЕ КАРЗИНЫ

router.delete('/:basketId', async(req, res) =>{
  
  
  try {
     const {basketId} = req.params
 

  const delitedbasket = await Basket.destroy({
    where: {id: basketId, userId: res.locals.user.id}
  })
  if(delitedbasket>0)
  {res.status(200).json({message:'success'})}
  } catch ({message}) {
    res.json({error:message})
  }
  

})


// РЕДАКТИРОВАНИЕ КАРЗИНЫ

router.put('/:basketId', async(req, res) =>{
try {
  const {basketId} = req.params
  const{name} = req.body
  const data = await Basket.update({name}, {where:{id:basketId, userId: res.locals.user.id}})

 
if(data[0]>0)
{
  const basket = await Basket.findOne({where:{id:basketId}})
 const name = basket.name
  

  
  res.json({ message:'success', name})}
  
} catch ({message}) {
  res.json({error:message})
}

})


module.exports = router;
