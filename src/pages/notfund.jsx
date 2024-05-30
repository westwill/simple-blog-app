import React from 'react'
import { Link } from 'react-router-dom';

const Notfund = () => {
  return (
    <div>
      <p>Not found</p>
      Go back to <Link to="/" className='text-orange-500 mt-9 hover:text-blue-800 transition duration-500'>Home</Link>
      </div>
  )
}

export default Notfund;