// import {React,useContext,useEffect} from 'react'
// import {useForm} from 'react-hook-form'
// import { loginContext } from '../../contexts/loginContext'
// import {Link,useNavigate} from 'react-router-dom'

// export default function Signin() {
 
//  let [user,loginErr,userLoginStatus,loginUser]=useContext(loginContext)
//  const navigate=useNavigate();
//   let {register,handleSubmit,formState:{errors}}=useForm();
// //  let submitForm=(data)=>{
// //     loginUser(data);
// //  }
// const submitForm = async (data) => {
//   try {
//     const loginSuccess = await loginUser(data);
//     if (loginSuccess) {
//       navigate('/userprofile');
//     } else {
//       // Handle invalid username or password
//       console.error("Invalid username or password");
//     }
//   } catch (error) {
//     console.error("Error during login:", error);
//   }
// };

//  return (
//     <div>
//       <p className='display-2 text-center'>LOGIN</p>
//       {loginErr.length !== 0 && (<p className='display-3 text-danger text-center'>{loginErr}</p>)}
//        <div className='row'>
//         <div className='col-11 col-sm-6 mx-auto'>
//       <form onSubmit={handleSubmit(submitForm)}>
//         <div className='mb-3'>
//           <label htmlFor='username'>Username</label>
//           <input type='text' id='username' className='form-control' {...register("username",{required:true})}/>
//           {errors.username?.type==="required" && <p className='text-danger'>*Username is required</p>}
//         </div>
//         <div className='mb-3'>
//           <label htmlFor='password'>Password</label>
//           <input type='password' id='password' className='form-control' {...register("password",{required:true})}/>
//           {errors.password?.type==="required" && <p className='text-danger'>*Password  is required</p>}
//         </div>
//         <Link to='/userprofile'><button type='submit' className='btn btn-success'>LOGIN</button></Link>
//         </form>
//         </div>
//     </div>
//     </div>
//   )
// }

import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginContext } from '../../contexts/loginContext';
import { Link, useNavigate } from 'react-router-dom';
import '../signin/Signin.css'
export default function Signin() {
  const [user, loginErr, userLoginStatus, loginUser] = useContext(loginContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');

  const handleLogin = async (data) => {
    try {
      const response = await fetch('/user-api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log('Login successful');
        // Handle successful login (e.g., store token, navigate to the next page)
        navigate('/userprofile'); // Navigate to the desired page
      } else {
        console.log('Login failed:', responseData.message);
        // Handle login failure (e.g., display error message)
        setError(responseData.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle network error or other unexpected issues
      setError('Internal Server Error');
    }
  };

  return (
    <div className='signinbg'>
      <p className='display-2 text-center'>LOGIN</p>
      {error && <p className='display-3 text-danger text-center'>{error}</p>}
      <div className='row'>
        <div className='col-11 col-sm-6 mx-auto'>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className='mb-3'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                id='username'
                className='form-control'
                {...register("username", {
                  required: true,
                })}
              />
              {errors.username?.type === "required" && <p className='text-danger'>*Username is required</p>}
            </div>
            <div className='mb-3'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                className='form-control'
                {...register("password", { required: true })}
              />
              {errors.password?.type === "required" && <p className='text-danger'>*Password is required</p>}
            </div>
            <button type='submit' className='btn btn-success'>LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
}


