import React from 'react';
import Hobbies from './Assests/Hobbies.png'

export default function GetStarted() {
  return (
    <div className='p-4 rounded bg-light col-12'>
        <div className='h3'>Your Hobby, Your Community...</div><br />
        <button className='btn bg-primary text-white'>Get Started</button><br /><br />
        <img src={Hobbies} alt="Hobbies" className='img-fluid'/>
    </div>
  )
}
