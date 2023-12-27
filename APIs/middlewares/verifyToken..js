const jwt=require("jsonwebtoken")

//write a middleware function to verify token
const verifyToken=(request,response,next)=>{
    //get authorization toekn from request handler
     const bearerToken=request.headers.authorization//bearer token
     //if bearer token not found
     if(bearerToken===undefined){
        response.send({message:"Unauthorized access..Plz login first"})

     }
     //if bearer token is existed
     else{
       //get token from bearer token
       const token=bearerToken.split(" ")[1]//[bearer ,token]
       //verify token
       try{
        jwt.verify(token,"abcdef")
        //calling next middleware
        next()
       }
       catch(err)
       {
          //forward err to error handling middleware
          next(new Error("Sessiom expired please relogin to continue"))
       }
     }
}

module.exports=verifyToken;