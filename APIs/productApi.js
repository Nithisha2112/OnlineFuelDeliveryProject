const exp=require("express");
const productApp=exp.Router();

productApp.get("/get-products",(request,response)=>{
    response.send({message:"All products"})
})

productApp.post('/create-products',(request,response)=>{
    response.send({message:"New product created"})
})

productApp.delete("/delete-products",(request,response)=>{
    response.send({message:"product deleted"})
})

module.exports=productApp;