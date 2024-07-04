import React from 'react';
import Artists from './Assests/Artists.png'

export default function Content() {
  return (
    <div className='col-md-7 col-sm-12 p-5 content'>
        <h1>Explore your hobby or passion</h1>

        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum similique accusantium eum neque repellendus, maiores sequi ipsum dolore hic, amet consequuntur ad explicabo nihil aspernatur ipsa voluptas! Molestiae, odit eligendi. <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius amet quis excepturi vero est fugiat perferendis illo expedita laborum reiciendis. Dolor aspernatur harum modi, expedita suscipit architecto provident obcaecati est.
        </div>

        <img src={Artists} alt="Artists_Logo" className='img-fluid w-100'/>
    </div>
  )
}
