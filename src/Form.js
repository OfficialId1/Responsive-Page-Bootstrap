import React from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa6';

export default function Form() {
  return (
    <div className='form'>
        <button className='h6  grey'><FaGoogle className='text-danger'/> Continue with Google</button>
        <button className='h6 grey'><FaFacebook className='text-primary'/> Continue with Facebook</button>
        <div className='d-flex align-items-center justify-content-center hyphen h6 small'>Or Connect with</div>
        <input type="text" placeholder=' email' className='p-2'/>
        <input type="password" placeholder=' password' className='p-2'/>
    </div>
  )
}
