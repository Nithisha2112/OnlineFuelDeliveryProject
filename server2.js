//create express app
const exp=require("express");
//calling express function to create 
const app=exp();

//import path
const path=require("path");
//connect react build
app.use(exp.static(path.join(__dirname,'./build')))



//assign port number
app.listen(3500,()=>{console.log("server is listening on port number 3500...")})

//get monogoclient
const mclient=require('mongodb').MongoClient;
//connect to db server using monogo client
mclient.connect("mongodb://0.0.0.0:27017")
.then((dbRef)=>{
   //connect to a batabase
   const dbObj=dbRef.db('b1db') 
    //connect to collections of the database
    const userCollectionObj=dbObj.collection('usersCollection')
    const prodCollectionObj=dbObj.collection('productsCollection')
    //share collecetions to apis
    app.set('userCollectionObj',userCollectionObj)
    app.set('prodCollectionObj',prodCollectionObj)
    console.log("DB connection success")


})
.catch(err=>console.log("data base connect err",err));



//import userapp
const userApp=require("./APIs/userApi")
//import product app
const productApp=require("./APIs/productApi");

//execute userapi when path starts with /user-api
app.use('/user-api',userApp);
//execute productapi when path starts with /product-api
app.use('/product-api',productApp);

// //invalid path
// const invalidPathmiddleware=(request,response,next)=>{
//     response.send({message:"Invalid path"})
// }
//* for any string
//app.use("*",invalidPathmiddleware)
//error handling middleware
const errorMiddleware=(error,request,response,next)=>{
    response.send({message:error.message})
}
app.use(errorMiddleware)

