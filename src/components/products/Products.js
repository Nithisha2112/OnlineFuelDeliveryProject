// import React from 'react'
// import './Products.css'
// import { Link } from 'react-router-dom'
// function Products() {
//   return (
//     <div className='container'>
//       <div className='display-4 text-white'>Products</div>
//     <div className="row mt-5">
      
//       <div className="col-md-6">
//         <div className="card">
//           <img src="https://images.meesho.com/images/products/73164565/qcoka_512.jpg" width="100px" height="150px"  className="card-img-top" alt="Card Image 1"/>
//           <div className="card-body">
//             <h5 className="card-title">Petrol</h5>
//             <p className="petrol">Price:$2</p>
//             <p className="card-text">To buy petrol click on the button</p>
//             <Link className="btn btn-primary" to="#">Buy Now</Link>
//           </div>
//         </div>
//       </div>

      
//       <div className="col-md-6">
//         <div className="card">
//           <img src="https://cdn.shopify.com/s/files/1/0520/9938/3459/products/COMP183-01.jpg?v=1614433553" width="180px" height="150px" className="card-img-top" alt="Card Image 2"/>
//           <div className="card-body">
//             <h5 className="card-title">Diesel</h5>
//             <p className="diesel">Price:$1.06</p>
//             <p className="card-text">To buy diesel click on the button</p>
//             <Link className="btn btn-primary">Buy Now</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

   
//   )
// }

// export default Products

import React, { useState } from 'react';
import './Products.css';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { useCart } from '../../contexts/CartContext';
import { FaGooglePay } from "react-icons/fa";
import { SiPhonepe } from "react-icons/si";
import { SiPaytm } from "react-icons/si";
import Payment from '../payment/Payment';
function Products() {
  const [showProductModal, setShowProductModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [amount, setAmount] = useState(0);
  const { addToCart } = useCart();
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);
  

  const handleCloseProductModal = () => {
    setShowProductModal(false);
    setQuantity(0);
    setAmount(0);
  };

  const handleClosePaymentModal = () => {
    setShowPaymentModal(false);
  };

  const handleShowProductModal = (product) => {
    setSelectedProduct(product);
    setShowProductModal(true);
  };

  const handleShowPaymentModal = () => {
    setShowProductModal(false); // Close the product selection modal
    setShowPaymentModal(true);
  };

  const handleIncrease = () => {
    setQuantity((count) => count + 1);
    setAmount(selectedProduct.price * (quantity + 1));
  };

  const handleDecrease = () => {
    const newQuantity = Math.max(quantity - 1, 0);
    setQuantity(newQuantity);
    setAmount(selectedProduct.price * newQuantity);
  };

  const reset = () => {
    setQuantity(0);
    setAmount(0);
  };

  const handleAddToCart = () => {
    const calculatedAmount = selectedProduct.price * quantity;
    addToCart({ ...selectedProduct, quantity, amount: calculatedAmount });
    setAmount(calculatedAmount);
    handleShowPaymentModal();
  };
  const icons = [
    { component: <Link to="/Payment"><FaGooglePay size={50} /></Link>, label: '   Google Pay' },
    { component: <Link to="/Payment"><SiPhonepe size={50} /></Link>, label: '   PhonePe' },
    { component: <Link to="/Payment"><SiPaytm size={50} /></Link>, label: '   Paytm' },
  ];

  
  return (
    <div className="container c1">
      <div className="display-4 text-dark  text-center">Products</div>
      <div className="row mt-5 flex-row">
        <div className="col-md-8 custom-card justify-content-center">
          <div
            className="card w me-4 ms-4"
            onClick={() => handleShowProductModal({ name: 'Petrol', price: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzhYRh6xSZ686mUD5nh_WhGsRQS9zNu5PNoFROGpumXm0bdbMHjpK-Mp3AHDIUnIqFlE&usqp=CAU' })}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzhYRh6xSZ686mUD5nh_WhGsRQS9zNu5PNoFROGpumXm0bdbMHjpK-Mp3AHDIUnIqFlE&usqp=CAU"
              width="300px"
              height="150px"
              className="card-img-top"
              alt="Card Image 1"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Petrol</h5>
              <p className="petrol text-center">Price: $2</p>
              <button className="btn btn-primary text-center" onClick={() => handleShowProductModal({ name: 'Petrol', price: 2 })}>
                BUY NOW
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-8 custom-card">
          <div
            className="card"
            onClick={() => handleShowProductModal({ name: 'Diesel', price: 1.06, image: 'https://cdn.shopify.com/s/files/1/0520/9938/3459/products/COMP183-01.jpg?v=1614433553' })}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0520/9938/3459/products/COMP183-01.jpg?v=1614433553"
              width="300px"
              height="150px"
              className="card-img-top"
              alt="Card Image 2"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Diesel</h5>
              <p className="diesel text-center">Price: $1.06</p>
              <button className="btn btn-primary text-center" onClick={() => handleShowProductModal({ name: 'Diesel', price: 1.06 })}>
                BUY NOW
              </button>
            </div>
          </div>
        </div>
        {/* Add more product cards as needed */}
      </div>

      {/* Display selected product and amount on the page */}
      {selectedProduct.name && (
        <div className="selected-product">
          <h2>Selected Product</h2>
          <p>Name: {selectedProduct.name}</p>
          <p>Price: ${selectedProduct.price}</p>
          <p>Quantity: {quantity}</p>
          <p>Amount: ${amount}</p>
        </div>
      )}

      <Modal show={showProductModal} onHide={handleCloseProductModal}>
        <Modal.Header closeButton>
          <Modal.Title>Select Number of Litres</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Product: {selectedProduct.name}</p>
          <p>Price: ${selectedProduct.price}</p>
          <p>Quantity: {quantity}</p>
          <p>Amount: ${amount}</p>
          <div className="btn__container">
            <button className="control__btn" onClick={handleIncrease}>
              +
            </button>
            <button className="control__btn" onClick={handleDecrease}>
              -
            </button>
            <button className="reset" onClick={reset}>
              Reset
            </button>
          </div>

          {/**form for address */}
          <form>
       <div class="form-group">
         <label for="addressTextarea">Enter Your Address:</label>
         {/* <textarea class="form-control" id="addressTextarea" rows="4" placeholder="Enter your address" required></textarea> */}
         <input type='text' class="form-control" id="addressTextarea" rows="4" placeholder="Enter your address" required></input>
       </div>
        </form>
        </Modal.Body>

        <Modal.Footer>
          <Button  variant="secondary" onClick={handleCloseProductModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddToCart}>
            BUY NOW
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Payment Modal */}
      <Modal show={showPaymentModal} onHide={handleClosePaymentModal}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Amount to be paid: ${amount}</p>
          <h5>Select Payment Options</h5>
          <ul>
            {icons.map((icon, index) => (
              <li key={index} onClick={() => setSelectedPaymentOption(icon.label)}>
                {icon.component}
                <span>{icon.label}</span>
              </li>
            ))}
          </ul>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePaymentModal}>
            Close
          </Button>
          {/* Add payment action button here */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Products;








