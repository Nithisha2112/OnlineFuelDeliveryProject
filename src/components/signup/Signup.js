import {React,useState} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../signup/Signup.css'
function Signup() {
 let {register,handleSubmit,formState:{errors}}=useForm();
 let navigate=useNavigate();
 let [duplicateUser,setDuplicateUser]=useState("");
 const submitForm= async(data)=>{
  console.log(data)
  let res= await axios.post("http://localhost:3500/user-api/Signup",data);
  console.log('res is',res);
  if (res.data.message === "User already existed") {
    setDuplicateUser("User already exists");
  }
  else{
    navigate('/Signin');
  }
}
  return (
    <div className='signupbg'>
      <p className='display-2 text-center'>REGISTER</p>
       <div className='row'>
        <div className='col-11 col-sm-6 mx-auto'>
         {duplicateUser !=="" && (<p className='text-center text-danger'>{duplicateUser}</p>)}
      <form onSubmit={handleSubmit(submitForm)}>
        <div className='mb-3'>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' className='form-control' {...register("username",{required:true})}
          />
          {errors.username?.type==="required" && <p className='text-danger'>*Username is required</p>}
        </div>
        <div className='mb-3'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' className='form-control' {...register("password",{required:true})}/>
          {errors.password?.type==="required" && <p className='text-danger'>*Password  is required</p>}
        </div>
        <div className='mb-3'>
          <label htmlFor='email'>EMAIL</label>
          <input type='email' id='email' className='form-control' {...register("email",{required:true})}/>
          {errors.email?.type==="required" && <p className='text-danger'>*Email  is required</p>}
        </div>
        <div className='mb-3'>
          <label htmlFor='date'>Date of birth</label>
          <input type='date' id='date' className='form-control' {...register("date",{required:true})}/>
          {errors.date?.type==="required" && <p className='text-danger'>*Date of birth  is required</p>}
        </div>
        <button type='submit' className='btn btn-success'>Register</button>

      </form>
      </div>
      </div>
    </div>
  )
}
export default Signup