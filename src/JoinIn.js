import React from 'react';
import Form from './Form';

export default function JoinIn() {
  return (
    <div className='joinIn'>
        <Form />
        <div className='small'>By continuing, you agree to our Terms of Service and Privacy Policy.</div>
        <br />
        <button className='w-100 joinIn-btn'>Agree and Continue</button>
    </div>
  )
}
