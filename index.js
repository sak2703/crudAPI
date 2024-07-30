const express=require('express')
const mongoose=require('mongoose')
const Product=require("./models/product.model.js")
const app=express()
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello from NODE API");

});

app.post('/api/products',async(req,res)=>{
    try{
    const product=await Product.create(req.body);
    res.status(200).json(product);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

mongoose.connect("mongodb+srv://<username>:<password>@cluster0.oxwboec.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("Connected to DB")
    app.listen(3000,()=>{
        console.log("server is active on port 3000")
    })
})
.catch(()=>{console.log("Error")});