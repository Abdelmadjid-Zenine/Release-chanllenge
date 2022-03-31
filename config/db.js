const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect('mongodb+srv://Showay:showay@cluster0.2i01t.mongodb.net/ProductsApp?retryWrites=true&w=majority')
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn    
    }catch(error){
        console.log(error);
        process.exit(1)

    }
    

}

module.exports = connectDB