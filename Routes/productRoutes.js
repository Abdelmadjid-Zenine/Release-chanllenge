const express = require('express')

const router = express.Router()

const {getProducts, setProduct, updateProduct, deleteProduct} = require("../Contollers/productController")
router.get('/', getProducts)
router.post('/addProduct', setProduct)
router.put('/:id', updateProduct)
router.delete('/:id',deleteProduct)




module.exports = router