const  mongoose  = require("mongoose");
const autoIncrement = require("mongoose-auto-increment")
const connection = mongoose.createConnection('mongodb+srv://Showay:showay@cluster0.2i01t.mongodb.net/ProductsApp?retryWrites=true&w=majority');

autoIncrement.initialize(connection)

const attributeValueSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Boolean:{
        type:Boolean
    },
    Date:{
        type:Date
    }
})
attributeValueSchema.plugin(autoIncrement.plugin, {
    model:'AttributeValue',
    field:'id'
})
module.exports = mongoose.model('AttributeValue', attributeValueSchema)