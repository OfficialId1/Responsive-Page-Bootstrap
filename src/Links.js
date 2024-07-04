import React from 'react';
import { FaFacebook,FaInstagram, FaTwitter, FaTelegram, FaGoogle, FaYoutube, FaPinterest } from 'react-icons/fa6';

export default function Testimonials() {
  return (
    <div className='row p-4 '>
       <div className="col-md-2 col-sm-12 mx-3 mt-4">
          <div className='h6'>Hobbycue</div>
          <a href="#">1</a><br />
          <a href="#">2</a><br />
          <a href="#">3</a><br />
          <a href="#">4</a><br />
          <a href="#">5</a><br />
       </div>

       <div className="col-md-2 col-sm-12 mx-3 mt-4">
          <div className='h6'>How Do I</div>
          <a href="#">1</a><br />
          <a href="#">2</a><br />
          <a href="#">3</a><br />
          <a href="#">4</a><br />
          <a href="#">5</a><br />
       </div>

       <div className="col-md-2 col-sm-12 mx-3 mt-4">
          <div className='h6'>Quick Links</div>
          <a href="#">1</a><br />
          <a href="#">2</a><br />
          <a href="#">3</a><br />
          <a href="#">4</a><br />
          <a href="#">5</a><br />
       </div>

       <div className="col-md-4 col-sm-12 mt-4">
          <div className='h6'>Social Media</div>
          <div><FaFacebook />&emsp;<FaTwitter />&emsp;<FaInstagram />&emsp;<FaPinterest />
          &emsp;<FaGoogle />&emsp;<FaYoutube />&emsp;<FaTelegram /></div><br />
          <div className='h6'>Invite Friends</div>
          <input type="text" className='rounded-start w-50' placeholder='Email ID'/><button className='rounded-end bg-primary text-white border-primary'>Invite</button>
          <div></div>
       </div>

       <div className='bg-light d-flex justify-content-center mt-4 p-2 small h6'>Purpla Cues pvt ltd</div>
    </div>
  )
}
