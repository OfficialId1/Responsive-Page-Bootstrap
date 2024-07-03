import React from 'react';
import { FaPlus } from 'react-icons/fa6';

export default function Add() {
  return (
    <div className='p-4 border bg-white rounded'>
        <div className='h5'><FaPlus />&emsp; Add your own</div><br />
        <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, incidunt iusto voluptatum veniam amet praesentium eligendi tenetur eveniet cumque aut maiores non consequatur quis libero, sunt facilis ea magnam nihil.
        </div><br />
        <button className='btn border border-primary'>Add New</button>
    </div>
  )
}
