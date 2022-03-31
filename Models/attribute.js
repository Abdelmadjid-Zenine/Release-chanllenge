const mongoose  = require("mongoose");
const autoIncrement = require('mongoose-auto-increment')

const connection = mongoose.createConnection('mongodb+srv://Showay:showay@cluster0.2i01t.mongodb.net/ProductsApp?retryWrites=true&w=majority');

const Schema = mongoose.Schema;
autoIncrement.initialize(connection)


const attributeSchema = mongoose.Schema({
    
    id:{
        type:Number,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Type:{
        type:mongoose.Schema.Types.Mixed
    },
    attributeValue:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'AttributeValue'
    }

})


attributeSchema.plugin(autoIncrement.plugin,{
    model:'Attribute',
    field:'id'
})
module.exports = mongoose.model("Attribute", attributeSchema)

