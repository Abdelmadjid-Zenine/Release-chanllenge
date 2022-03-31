


const ProductType = require("../Models/productType");
const Attribute = require("../Models/attribute")
const AttributeValue = require("../Models/AttributeValue");
const { nextTick } = require("process");
// const {setAttribute} = require("");


const getProductType = async (req, res) => {
    const productType = ProductType.find()
}
const getProductsType = async (req, res) => {
    const productTypes = ProductType.find((err, data) => {
        if(err){
            console.log(err)
        }
        else{
            res.send(data)
        }
    })
    console.log(productTypes)
}

const setProductType = async (req, res) => {
    var productType = new ProductType({
        Name:req.body.Name,
        Attributes:[...req.body.Attributes]
    })
   
    
    if(!req.body){
        
        console.log("error")
    }
   
    ProductType.create(productType)
    req.body.Attributes.map((attr) => {
        
        var attrVal = {
            Name:attr.value,
            Boolean:true,
            Date:attr.Date
        }
        var attribute = {
            Name:attr.value,
            Type:attr.Type,
            attibuteValue:attrVal
        }
        console.log(attribute)
        Attribute.create(attribute)
        AttributeValue.create(attrVal)
    })
}

const updateProductType = async (req, res) => {

}

const deleteProductType = async (req, res) => {
    ProductType.findByIdAndRemove(req.params.id, (err, data) => {
        if(err){
            console.log(req.params.id)
            console.log(err)
        }
        else{
            res.status(200).json({
                msg:"prod deleted"
            })
        }
    })   
}
const setAttributes = async (req, res) => {
    console.log(req.body)
    
}
module.exports = {
    getProductsType,
    getProductsType,
    setProductType,
    updateProductType,
    deleteProductType
}