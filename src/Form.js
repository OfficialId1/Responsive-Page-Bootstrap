import React from 'react'

export default function Form() {
  return (
    <div className='form'>
        <button>Continue with Google</button>
        <button>Continue with Facebook</button>
        <div className='d-flex align-items-center justify-content-center'>Or Connect with</div>
        <input type="text" placeholder='email' className='p-2'/>
        <input type="password" placeholder='password' className='p-2'/>
    </div>
  )
}
