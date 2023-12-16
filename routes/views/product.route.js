const router = require("express").Router()
const ProductP = require("../../components/Product")
const {Product} = require ("../../db/models")


router.get('/:productId', async(req,res)=>{
    try {
        const {productId} = req.params
const product = await Product.findOne({where: {id: Number(productId)} })
// console.log(product);

        const html = res.renderComponent(ProductP, {
            title: "productPage",
            product,
            user:res.locals.user
        })
        res.send(html)
    } catch (message) {
        console.log(message);
    }
})






module.exports = router