import React from 'react'

export default function Card({icon, name, desc, button}) {
  return (
    <div className='cards p-2 col-md-6'>
        <div className='p-4 border border-secondary rounded'>
          <div className='icon'>{icon} &emsp; {name}</div><br />
          <div>{desc}</div><br />
          <button className='btn border border-secondary'>{button}</button>
        </div>
    </div>
  )
}
