import React from 'react';
import Form from './Form';
import { FaLock } from 'react-icons/fa6';

export default function SignIn() {
  return (
    <div className='signIn'>
        <Form />

        <div className='d-flex justify-content-between'>
            <span><input type="checkbox" /> Remember me</span>
            <span><FaLock /> Forgot Password</span>
        </div><br />

        <button className='w-100 signIn-btn'>Continue</button>
    </div>
  )
}
