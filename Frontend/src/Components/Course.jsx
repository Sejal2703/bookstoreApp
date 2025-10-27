import React from 'react'
import Cards from './Cards'
import list from '../data/list.json'
import {Link} from "react-router-dom"

function Course() {
  return (
<>
<div className='max-w-screen-2xl mx-auto px-4 md:px-10 '>
  <div className='mt-28 items-center justify-center text-center'>
    <h1 className='text-2xl md:text-4xl'>We are delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
    <p  className='mt-12'>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, dignissimos? Voluptatibus maiores sequi at tempora repellat enim dolore est! Ullam sunt, explicabo magni ex impedit exercitationem nam cumque odit minus.
    </p>
    <Link to="/">
    <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
    </Link>
  </div>

  <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
    {
  list.map((item) => {
    return <Cards key={item.id} item={item} />;
  })
}

  </div>
</div>
</>
  )
}

export default Course
