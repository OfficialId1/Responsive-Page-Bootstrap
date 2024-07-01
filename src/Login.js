import React, { useState } from 'react';
import SignIn from './SignIn';
import JoinIn from './JoinIn';

export default function Login() {
  const [signIn, setSignIn] = useState(true);

  return (
    <div className='col-md-5 col-sm-12 login p-4'>
      <h4>
        <span 
          onClick={() => setSignIn(true)} 
          className={signIn ? 'active' : ''}
        >Sign In</span> 

        <span 
          onClick={() => setSignIn(false)} 
          className={signIn ? 'm-5' : 'active m-5'}
        >Join In</span>
      </h4>

      {signIn ? <SignIn /> : <JoinIn/>}
    </div>
  )
}
