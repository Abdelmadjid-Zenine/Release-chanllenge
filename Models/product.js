const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    producType:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ProductType'
    },
    assignedAttributes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'AssignedAttribute'
    }]
},{
    timestamps:true
})

module.exports = mongoose.model('Product', productSchema)