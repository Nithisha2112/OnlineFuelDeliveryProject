import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../payment/Payment.css'
const Payment = ({ onSubmit, onClose, paymentOption }) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const navigate = useNavigate();

  
  const onSubmitHandler = async (data) => {
    
    console.log(data)
 
  
    // In the Payment component
navigate('/Final', { state: { paymentStatus: 'success' } });

  
    
  }

  return (
    <div className="mt-4 paymentbg">
      <div className='col-11 col-sm-6 mx-auto'>
        <h3>Enter payment details</h3>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className='mb-3'>
            <label htmlFor='upiId'>UPI_ID</label>
            <input
              type='text'
              id='upiId'
              className='form-control'
              {...register('upiId', { required: '*this field is required' })}
            />
            {errors.upiId && <p className='text-danger'>{errors.upiId.message}</p>}
          </div>
          <div className='mb-3'>
            <label htmlFor='mobilenum'>MOBILE NUMBER</label>
            <input
              type='text'
              id='mobilenum'
              className='form-control'
              {...register('mobilenum', { required: '*this field is required' })}
            />
            {errors.mobilenum && <p className='text-danger'>{errors.mobilenum.message}</p>}
          </div>
         <button  className='btn btn-success'>
            Submit details
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
