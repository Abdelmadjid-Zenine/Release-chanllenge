const mongoose = require("mongoose");

const assignedAttributeSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    attributeValue:{
        type:mongoose.Schema.Types.ObjectId, ref:'AttributeValue'
    }

})

module.exports = mongoose.model("AssignedAttribute", assignedAttributeSchema)