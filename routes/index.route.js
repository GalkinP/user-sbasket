const router = require('express').Router();

const mainRoter = require('./views/main.route')
const basketRouter = require('./views/basket.route')
const productRouter = require('./views/product.route')

const authRouter = require('./api/auth.route')

const apiBasketRouter = require('./api/basket.route')

const apiProductRouter =require('./api/product.route')

// VIEW
router.use('/', mainRoter)
router.use('/baskets', basketRouter)
router.use('/products', productRouter)
//AUTH
router.use('/auth', authRouter)
//API
router.use('/api/baskets', apiBasketRouter)
router.use('/api/products', apiProductRouter)

module.exports = router;
