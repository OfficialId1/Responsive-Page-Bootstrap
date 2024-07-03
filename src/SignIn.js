import React from 'react';
import Form from './Form';
import { FaLock } from 'react-icons/fa6';

export default function SignIn() {
  return (
    <div className='signIn'>
        <Form />

        <div className='d-flex justify-content-between'>
            <span className='h6 small'><input type="checkbox" /> Remember me</span>
            <span className='h6 small'><FaLock /> Forgot Password?</span>
        </div><br />


        <button className='w-100 signIn-btn'>Continue</button>
    </div>
  )
}
