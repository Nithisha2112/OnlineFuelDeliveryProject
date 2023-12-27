// import './App.css';
// import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// import Rootlayout from './Rootlayout';
// import Home from './components/home/Home';
// import Signup from './components/signup/Signup';
// import Signin from './components/signin/Signin';
// import Aboutus from './components/aboutus/Aboutus';
// import UserProfile from './userprofile/UserProfile';
// import Products from './components/products/Products';
// import Cart from './components/cart/Cart';
// function App() {
//   const router=createBrowserRouter([
//     {   path:"/",
//         element:<Rootlayout/>,
//         children:[
//           {
//               path:"/",
//               element:<Home/>
//           },
//           {
//             path:"/Signup",
//             element:<Signup/>
//           },
//           {
//             path:"/Signin",
//             element:<Signin/>
//           },
//           {
//              path:"/Aboutus",
//              element:<Aboutus/>
//           },
//           {
//             path:"/UserProfile",
//             element:<UserProfile/>,
//             children:[
//               {
//                 path:"products",
//                 element:<Products/>,
//               },
//               {
//                 path:"cart",
//                 element:<Cart/>
//               }
              
//             ]
//           }
          
//         ]
//         }
//         ])
    
    
    
    
//     return (
//     <div className="main">
//       <RouterProvider router={router}/>
//     </div>
//   );
// }

// export default App;


// Import necessary dependencies and components
import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Rootlayout from './Rootlayout';
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';
import Aboutus from './components/aboutus/Aboutus';
import UserProfile from './userprofile/UserProfile';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';
import CartProvider from './contexts/CartContext'; // Adjust the path accordingly
import Payment from './components/payment/Payment';
import Final from './components/final/Final';
// Create your route configuration
const routes = [
  {
    path: '/',
    element: <Rootlayout />,
    children: [
      { path: '/', element: <Home /> },
      {path:'/Final' , element:<Final />},
      { path: '/Signup', element: <Signup /> },
      { path: '/Signin', element: <Signin /> },
      { path: '/Aboutus', element: <Aboutus /> },
      {path:'/Payment' , element: <Payment/>},
      { path: '/cart', element: <Cart /> },
      {
        path: '/UserProfile',
        element: <UserProfile />,
        children: [
          { path: 'products', element: <Products /> },
         
        ],
      },
    ],
  },
];

function App() {
  // Create the router using createBrowserRouter
  const router = createBrowserRouter(routes);

  return (
    <div className="main">
      {/* Wrap your entire application with CartProvider */}
      <CartProvider>
        {/* Include RouterProvider to enable react-router functionality */}
        <RouterProvider router={router}>
          {/* Use the Route component to render the matched route */}
          <Route path="/" element={<Rootlayout />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route
            path="/UserProfile"
            element={<UserProfile />}
          />
        </RouterProvider>
      </CartProvider>
    </div>
  );
}

export default App;


