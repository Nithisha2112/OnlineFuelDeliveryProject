import React from 'react';
import { useLocation } from 'react-router-dom';

function Final() {
  const location = useLocation();
  console.log('Location state:', location.state);
  const paymentStatus = location.state && location.state.paymentStatus;

  return (
    <div>
      <h2 className='text-center mt-100 text-success' style={{ marginTop: '100px' }}>
        Your payment {paymentStatus === 'success' ? 'has been done successfully' : ' is failed'}
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>

      {/* Add an image element with the desired URL */}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14VeeYX80QWJosd9_7d9UgKHhXy4bEDS-5J2kvleVqP51WI3fEl-O2Aqk61ZKaBDU4pA&usqp=CAU" alt="Your Image" style={{ width: '500px' }}/>
    </div>
    <h2 className='text-center  text-success' style={{ marginTop: '100px' }}>
        Your Order has been placed!!
      </h2>
    </div>
  );
}

export default Final;
