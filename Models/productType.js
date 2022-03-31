const mongoose = require("mongoose");

const autoIncrement = require('mongoose-auto-increment')

const connection = mongoose.createConnection('mongodb+srv://Showay:showay@cluster0.2i01t.mongodb.net/ProductsApp?retryWrites=true&w=majority');
autoIncrement.initialize(connection)

const producTypeSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Attributes:[
        {type:mongoose.Schema.Types.Array, ref:'Attribute'}
    ]

}, {
    timestamps:true
})

producTypeSchema.plugin(autoIncrement.plugin,{
    model:'ProductType',
    field:'id'
})
module.exports = mongoose.model("ProductType",producTypeSchema)