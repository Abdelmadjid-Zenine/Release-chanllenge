const Attribute = require("../Models/attribute");


const getAttribute = async (req, res) => {

}

const setAttribute = async (req, res, attrs) => {
    if(!req.body.text){

    }
    attrs.Attributes.map((attr) => {
        var attrVal = {
            Name:attr.Name,
            Boolean:true,
            Date:attr.Date
        }
        var attribute = {
            Name:attr.Name,
            Type:attr.Type,
            attibuteValue:attrVal
        }
        Attribute.create(attribute)
    })
   
}

const getAttributes = async (req, res) => {

}
module.exports = {
    getAttribute,
    setAttribute, 
    getAttributes
}