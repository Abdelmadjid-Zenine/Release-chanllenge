const express = require('express')

const connectDB = require("./config/db")
const cors = require('cors')
connectDB()
const port = 5001

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use('/products', require("./Routes/productRoutes"))
app.use('/productTypes', require("./Routes/productTypeRoutes"))

app.listen(port, () => {
    console.log(port);
})