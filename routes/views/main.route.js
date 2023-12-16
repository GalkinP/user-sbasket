const router = require("express").Router()
const MainPage = require("../../components/page/MainPage")
const {Basket} = require ("../../db/models")

router.get('/', async(req,res)=>{
    try {
const baskets = await Basket.findAll()

        const html = res.renderComponent(MainPage, {
            title: "mainPage",
            baskets,
            user:res.locals.user
        })
        res.send(html)
    } catch (message) {
        console.log(message);
    }
})






module.exports = router