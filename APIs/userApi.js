//create mini-express application(A router)
const exp=require("express");
const userApp=exp.Router();

const expressAsyncHandler=require("express-async-handler")
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")
const verifyToken=require("./middlewares/verifyToken.")
//body parser,if we dont write this we will get output as undefined
userApp.use(exp.json())


//public routes
//create user
userApp.post('/Signup',expressAsyncHandler(
    async (request,response)=>{
    
        //get userCollection
        const userCollectionObj=request.app.get("userCollectionObj")
        //get new user from request
        const newUser=request.body;
    
       //check for duplicates user by username
      let userOfdb=await userCollectionObj.findOne({username:newUser.username})
      //if user already existed,send res to client as "already existed"
      if(userOfdb!=null)
      {
        response.status(200).send({message:"User already existed"})
      }
      //if user not existed
      else{
        //hash the password
         let hashedpassword=await bcryptjs.hash(newUser.password,5)
         //console.log(hashedpassword)
         newUser.password=hashedpassword;
         await userCollectionObj.insertOne(newUser)
         response.status(201).send({message:"User created"})
      }
    }
))
//get username by username
//make it as private route
userApp.get('/get-user/:username',verifyToken,expressAsyncHandler(async(request,response)=>{
   //get userCollection
   const userCollectionObj=request.app.get("userCollectionObj")
   //get username from url
   let usernameFromUrl= request.params.username;
  //find user by username
  const userOfdb=await userCollectionObj.findOne({username:usernameFromUrl})
  //if user not existed
  if(userOfdb==null)
  response.status(200).send({message:"user not found"})
  else{
    delete userOfdb.password;
    response.status(200).send({message:"User",payload:userOfdb})
  }


}))

//user login
// user login
userApp.post('/login', expressAsyncHandler(async (request, response) => {
  try {
    console.log('Login request received:', request.body);

    // get userCollection
    const userCollectionObj = request.app.get('userCollectionObj');
    // get user credentials from request
    const userCredObj = request.body;
    // normalize the username (make it lowercase and trim whitespace)
    const normalizedUsername = userCredObj.username.trim().toLowerCase();

    // verify username
    let userOfDb = await userCollectionObj.findOne({ username: normalizedUsername });

    // if username is invalid
    if (!userOfDb) {
      console.log('Invalid username:', normalizedUsername);
      response.status(401).send({ message: 'Invalid username or password' });
    } else {
      // verify password
      let isEqual = await bcryptjs.compare(userCredObj.password, userOfDb.password);

      // if password not matched
      if (!isEqual) {
        console.log('Invalid password for username:', normalizedUsername);
        response.status(401).send({ message: 'Invalid username or password' });
      } else {
        // create JWT token
        let jwtToken = jwt.sign({ username: userOfDb.username }, 'abcdef', { expiresIn: '20m' });
        // send token as response
        console.log('Login successful for username:', normalizedUsername);
        response.status(200).send({ message: 'Login successful', token: jwtToken });
      }
    }
  } catch (error) {
    console.error('Error during login:', error);
    response.status(500).send({ message: 'Internal Server Error' });
  }
}));

 
//private route
userApp.get('/test',verifyToken,(req,res)=>{
  res.send({message:"reply from test"})
})
//export userapp
module.exports=userApp;