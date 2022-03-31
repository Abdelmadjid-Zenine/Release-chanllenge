const express = require('express')

const {getProductType, getProductsType,setProductType, updateProductType, deleteProductType} = require("../Contollers/productTypeController")
const router = express.Router()

router.get('/', getProductsType)
router.get('/:id', getProductType)
router.post('/addProductType', setProductType)
router.put('/:id', updateProductType)
router.post('/:id',deleteProductType)


module.exports = router