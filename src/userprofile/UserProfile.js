import React, { useContext } from 'react';
import Products from '../components/products/Products';
import { loginContext } from '../contexts/loginContext';
import Cart from '../components/cart/Cart';
function UserProfile() {
  const [user, loginErr, userLoginStatus, loginUser, logoutUser] = useContext(loginContext);
  
  console.log(user)
  return (
    <div>
      
      <Products />
      
    </div>
  );
}

export default UserProfile;
